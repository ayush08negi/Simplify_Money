# 🌟 Simplify Metals – Live Gold, Silver & Platinum Price Tracker

A simple and modern web application built using **React, Vite, and TailwindCSS** that displays **real-time metal prices** (Gold, Silver, and Platinum) using the **GoldAPI.io** live market API.

This project simulates a real fintech metal pricing flow with independent loaders, detailed screens, error handling, and smooth UI design.

---

## 🚀 Features

- Live prices for **Gold, Silver & Platinum (INR)**
- Independent loading and retry button for each metal.
- Detailed view with:
  - Current price
  - Previous open and close
  - 24-hour price change
  - Last updated time
  - Metal icon
- Dark glass UI design with gradients & animations
- React Router navigation
- API integration with error handling

---

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React + Vite** | Frontend framework & faster development |
| **Tailwind CSS** | Styling & responsive UI |
| **React Router** | Page navigation |
| **GoldAPI.io** | Real-time precious metal pricing |

---

## 🔑 Environment Setup

Create a `.env` file in the project root:

```
VITE_GOLD_API_KEY=your-goldapi-key
```

Restart your project after editing `.env`.

---

## ▶️ How to Run the Project

```
npm install
npm run dev
```

Open in browser:  
**http://localhost:5173**

---

## 📍 Deployment Notes

```
npm run build
npm run preview
```

Add `.env` before deployment

---

## 📝 Details on My Solution

The application loads pricing for metals individually, using separate API calls so that one request failure does not affect the others. The UI uses TailwindCSS with glassmorphism and gradients to deliver a premium fintech feel. The details page extracts passed state via React Router and falls back to another API call if needed.

---

## 🧠 Approach

- Setup frontend using **Vite + React**
- Created reusable components for scalable UI
- Integrated live market pricing from **GoldAPI.io**
- Implemented independent loaders per tile
- Handled errors with retry mechanism
- Designed UI with animations, icons & gradient text

---

## ⚠️ Challenges & Learnings

| Challenge | Fix |
|-----------|------|
| GoldAPI free tier returns 403 after rate usage | Added retry button & fallback handling |
| Slow API responses | Added skeleton loaders |

---

### 👤 Author
**Ayush Negi**  
Frontend Developer | MERN | React | TailwindCSS  
📧 `negi08ayush@gmail.com`

