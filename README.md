# 🚚 Zap Shift

Zap Shift হলো একটি আধুনিক **Parcel Delivery & Logistics Management System**। এখানে ইউজার সহজেই পার্সেল পাঠাতে পারে, কস্ট ক্যালকুলেট করতে পারে, অনলাইন পেমেন্ট (Stripe) দিতে পারে এবং নিজের পার্সেল ট্র্যাক করতে পারে। পুরো প্রজেক্টটা রিয়েল-ওয়ার্ল্ড ডেলিভারি সিস্টেম মাথায় রেখে বানানো।

---

## ✨ Features

* 📦 Parcel Create / View / Delete
* 💰 Smart Parcel Cost Calculation
* 💳 Stripe Payment Integration
* ✅ Payment Success & Cancel Handling
* 🔐 Secure API (Axios + Middleware Ready)
* 📊 User-wise Parcel Data (Email ভিত্তিক)
* ⚡ Fast & Scalable (MongoDB + Express)

---

## 🛠️ Tech Stack

### Frontend

* React
* React Router
* TanStack Query
* Axios
* Tailwind CSS
* Heroicons

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Stripe API
* dotenv
* cors

---

## 📂 Project Structure (Simple View)

```
client/
 ├─ src/
 │  ├─ Pages/
 │  ├─ hooks/
 │  ├─ components/
 │  └─ routes/

server/
 ├─ index.js
 ├─ .env
 └─ package.json
```

---

## 🔑 Environment Variables

Backend এ `.env` ফাইলে নিচের ভ্যারিয়েবলগুলো দিতে হবে:

```
DB_USER=your_mongodb_user
DB_PASS=your_mongodb_password
STRIPE_SECRET=your_stripe_secret_key
SITE_DOMAIN=http://localhost:5173
```

---

## 🚀 How to Run the Project

### Backend

```bash
npm install
nodemon index.js
```

Server রান করবে:

```
http://localhost:3000
```

### Frontend

```bash
npm install
npm run dev
```

Client রান করবে:

```
http://localhost:5173
```

---

## 💳 Stripe Payment Flow

1. User parcel confirm করে
2. Stripe Checkout Session তৈরি হয়
3. User Stripe hosted page এ payment দেয়
4. Payment success হলে `session_id` দিয়ে backend verify হয়
5. Parcel status update করা যায় (paid)

---

## 📌 API Endpoints

| Method | Endpoint                 | Description                |
| ------ | ------------------------ | -------------------------- |
| GET    | /parcels                 | সব parcels / email অনুযায়ী |
| GET    | /parcels/:id             | Single parcel              |
| POST   | /parcels                 | Create parcel              |
| DELETE | /parcels/:id             | Delete parcel              |
| POST   | /create-checkout-session | Stripe payment             |
| PATCH  | /payment-success         | Payment verify             |

---

## 🧠 Future Improvements

* 🔔 Email Notification
* 📍 Live Parcel Tracking
* 👤 Rider Management
* 📈 Admin Dashboard
* 🔐 JWT Authentication

---

## 🤝 Contribution

এই প্রজেক্টটা শেখার এবং রিয়েল প্র্যাকটিসের জন্য বানানো। চাইলে fork করে improve করতে পারো। Clean code আর proper commit দিলে সবসময় welcome।

---

## ❤️ Final Note

Zap Shift বানানো হয়েছে traditional delivery system + modern tech mindset দিয়ে। Simple, reliable আর practical — ঠিক যেভাবে একটা real logistics app হওয়া উচিত।

---

**Developed with focus & disciplin
