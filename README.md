



## 📎 URL Shortener API

A minimal URL shortening service built with **Node.js**, **Express**, and **MongoDB**.

---

### 🚀 Features

* Shorten long URLs into short codes.
* Redirect short URL to the original.
* RESTful API design.
* MongoDB as the database.

---

### 🧑‍💻 Tech Stack

* Node.js
* Express.js
* MongoDB (via Mongoose)
* Nanoid (for generating unique short codes)
* valid-url (to validate input URLs)

---

### 📁 Project Structure

```
Url_Shortner-main/
│
├── models/
│   └── Url.js         # Mongoose schema for URLs
│
├── routes/
│   └── urlRoutes.js   # API routes (shorten, redirect)
│
├── controllers/
│   └── urlController.js  # Logic for URL shortening & redirection
│
├── db/
│   └── dbconnection.js   # MongoDB connection logic
│
├── .env                # Environment variables
├── server.js           # Entry point of the app
├── package.json
└── README.md
```

---

### 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/Url_Shortner-main.git
cd Url_Shortner-main

# Install dependencies
npm install
```

---

### ⚙️ Environment Variables

Create a `.env` file in the root directory and add:

```
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://short.ly
PORT=5000
```

---

### ▶️ Run the Server

```bash
# Development
npm run dev

```

---

### 📬 API Endpoints

#### 🔗 Shorten a URL

* **POST** `/shorten`
* **Body:**

  ```json
  {
    "Url": "https://example.com"
  }
  ```
* **Response:**

  ```json
  {
    "shorturl": "https://short.ly/XyZ123"
  }
  ```

#### ↩️ Redirect to Original URL

* **GET** `/:shortCode`
* Redirects to original URL if valid.

---

### ✅ Optional Features (Bonus)

* ✅ Rate limiting with middleware.
* ✅ Expiration logic for URLs.
* ✅ Click analytics (track number of times a short URL is used).

---

### 🧪 Testing the API with Postman

You can import the provided Postman collection or manually test:

1. `POST /shorten` – provide JSON body.
2. `GET /:shortCode` – visit in browser or use Postman.

---

### 📄 License

This project is licensed under the [MIT License](LICENSE).

---

Would you like me to:

* Add this directly inside the repo?
* Add Postman collection export?
* Create the LICENSE file too?

Let me know how you'd like to proceed.
