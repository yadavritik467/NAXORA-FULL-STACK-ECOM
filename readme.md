# 🛍️ NAXORA — Full Stack E-Commerce Cart (Vibe Commerce Assignment)

This is a **Full Stack E-Commerce Cart Application** built as part of the **Vibe Commerce Internship Assignment**.  
It demonstrates **React + Node.js + MongoDB** integration, covering product listing, cart management, and checkout flow.

⬇️[Demo Video Download](https://www.awesomescreenshot.com/video/45789689?key=7277485aa48f20d2576a0844287e94c0)


## ⚙️ Tech Stack

**Frontend:** React (Vite) + TypeScript + TailwindCSS + Axios  
**Backend:** Node.js + Express.js + MongoDB (Mongoose)  
**API Type:** REST  
**Version Control:** Git & GitHub  
**Demo Video:** 🎥 [Loom/YouTube Link Here]


## 🚀 Features

✅ Product listing with mock data (MongoDB)  
✅ Add to Cart / Remove from Cart functionality  
✅ View Cart Items, Quantity, and Total  
✅ Checkout with user details (Name, Email)  
✅ Dynamic Receipt generation after checkout  
✅ MongoDB persistence for products and cart  
✅ Fully responsive modern UI (TailwindCSS)  
✅ Proper error handling & async middleware  



## Prerequisite

To run this project your machine must have node js.
download node.js  from here https://nodejs.org/en/download
to check if it is downloaded run command on your cmd

```
node -v

npm -v

If its shows the version like this  v20.12.2 you are good to go for this project.

```


## Clone the repository

```
git clone https://github.com/yadavritik467/NAXORA-FULL-STACK-ECOM.git
cd NAXORA-FULL-STACK-ECOM

```

## For Frontend

```
cd frontend

npm install

npm run dev

```

Frontend will start on 👉 http://localhost:5173



## For Backend

```
cd backend

npm install

npm run dev

```

Backend will start on 👉 http://localhost:8080





## 🧠 Backend API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| `GET` | `/api/products` | Fetch all products |
| `POST` | `/api/cart` | Add product to cart |
| `GET` | `/api/cart` | Get all cart items |
| `DELETE` | `/api/cart/:id` | Remove a product from cart |
| `POST` | `/api/checkout` | Mock checkout & generate receipt |

---

### 🧾 Example Checkout Response

```json
{
  "success": true,
  "message": "Checkout successful",
  "receipt": {
    "customer": {
      "name": "Ritik Yadav",
      "email": "mk@gmail.com"
    },
    "items": [
      {
        "name": "Smart Fitness Watch",
        "price": "4499",
        "qty": 1,
        "subtotal": 4499
      },
      {
        "name": "Wireless Bluetooth Headphones",
        "price": "2999",
        "qty": 1,
        "subtotal": 2999
      }
    ],
    "totalAmount": 7498,
    "timestamp": "2025-10-28T17:43:19.642Z",
    "orderId": "ORD-399642"
  }
}
```


### 🧩 API Integration Flow

```
1️⃣ Products Page → Fetch all products using
GET /api/products

2️⃣ Add to Cart → Add product to cart via
POST /api/cart

3️⃣ Cart Page → Fetch cart via
GET /api/cart

4️⃣ Remove Item → Remove product from cart using
DELETE /api/cart/:id

5️⃣ Checkout → Send cart items to
POST /api/checkout

```

### 🧰 Bonus Features Implemented

✅ DB persistence for mock user & cart
✅ Error handling via custom AppError class
✅ Async middleware (catchAsync) to prevent server crashes
✅ Modern and responsive UI built with TailwindCSS
✅ Clean component-based architecture (React + TypeScript)
✅ Receipt generation with dynamic order ID & timestamp


## 👨‍💻 Developer Info

```
👤 Name: Ritik Yadav
💼 Role: Full Stack Developer
📘 Assignment: Vibe Commerce Internship Task
🌐 GitHub: https://github.com/yadavritik467
📧 Email: yadavritik467@gmail.com

```


