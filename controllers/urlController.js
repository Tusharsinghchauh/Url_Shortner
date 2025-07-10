const Url = require("../models/Url");
const { nanoid } = require("nanoid");
const validUrl = require("valid-url");
const BASE_URL = "https://short.ly";

exports.shortenUrl = async (req, res) => {
  const { url: originalUrl } = req.body;

  if (!originalUrl || !validUrl.isUri(originalUrl)) {
    return res.status(400).json({ error: "A valid URL is required" });
  }

  const shortCode = nanoid(6);
  const shortUrl = `${BASE_URL}/${shortCode}`;

  try {
    await Url.create({
      originalUrl,
      shortCode,
    });

    return res.status(200).json({ shortUrl });
  } catch (error) {
    console.error("Error creating short URL:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.redirectToOriginalUrl = async (req, res) => {
  try {
    const { shortCode } = req.params;

    const urlEntry = await Url.findOne({ shortCode });

    if (!urlEntry) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    return res.redirect(urlEntry.originalUrl);
  } catch (error) {
    console.error("Error during redirect:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
