# 🛒 Retail Management System

A full-stack retail management system that enables **admin-based product management** and **customer-side product browsing by category**, built using a **microservices architecture**.

---

## 🚀 Features

### 👨‍💼 Admin Module
- Admin Registration & Login  
- Add new products  
- Update existing products  
- Delete products  
- Manage stock levels  
- View purchase reports  

---

### 🛍️ Customer Module
- Browse products by category  
- Categories include:
  - Grocery  
  - Dairy  
  - Snacks  
  - Cleaning Items  
  - Soaps & Shampoo  
- Real-time product updates (auto-refresh)  

---

## 🧱 Architecture

### Backend (Microservices)
- **main-service** → Admin & Customer handling  
- **product-service** → Product & supplier management  

### Frontend
- React + TypeScript  
- Tailwind CSS  

---

## 🛠️ Tech Stack

### Backend
- Spring Boot  
- Spring Data JPA  
- REST APIs  
- Microservices Architecture  

### Frontend
- React  
- TypeScript  
- Tailwind CSS  

### Tools
- Postman (API testing)  
- Git & GitHub  

---

## 📂 Project Structure
-backend/
-├── main-service
-├── product-service

-frontend/
-├── pages/
-├── types/
-├── styles/

---

## ⚙️ How to Run

### Backend

-cd backend/main
-mvn spring-boot:run

-cd backend/product
-mvn spring-boot:run

###Frontend

-cd frontend
-npm install
-npm run dev

###📌 Key Highlights
Separation of concerns using microservices
REST API communication between services
Real-time frontend updates using polling
Structured and scalable project architecture

###🚧 Future Improvements
Authentication & authorization (JWT)
Cart and checkout system
Order management
Deployment (Docker / Cloud)
