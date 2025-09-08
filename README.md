# 🌙 Sunnah Sayings

Sunnah Sayings is a modern Islamic quotes web application built with the **MERN stack**.  
It allows users to add, manage, and explore inspirational sayings, Hadiths, and wisdom from Islamic scholars and companions.  
Admins can approve, edit, or delete quotes, ensuring authenticity and quality before they are publicly visible.

---

## 🔗 Live Links

- **Client Live Link:** [https://sunnah-sayings.vercel.app/](https://sunnah-sayings.vercel.app/)
- **Server Live Link:** [https://sunnah-sayings-server.vercel.app/](https://sunnah-sayings-server.vercel.app/)
- **Server Repository:** [https://github.com/amirsayeed/Sunnah-Sayings-Server](https://github.com/amirsayeed/Sunnah-Sayings-Server)

---

## 👨‍💼 Admin Credentials

Use the following credentials to log in as an admin:

```bash
Email: admin@sunnahsayings.com
Password: Admin1
```

---

## ✨ Features

### 🧑‍💻 User Features

- Register / Login (Email + Google Auth)
- Add new quotes with author, source, category, and tags
- View submitted quotes and their approval status
- Delete their own pending quotes before approval
- Explore the latest approved quotes on the homepage

### 🛡️ Admin Features

- Manage all submitted quotes
- Approve or set quotes back to pending
- Edit or delete any quote
- View dashboard with all pending and approved quotes

### 🌍 General Features

- Beautiful responsive UI with **Tailwind + DaisyUI**
- Home page slider and introduction section
- Dashboard for both user and admin with clear actions
- MongoDB-backed persistence with timestamps for latest quotes
- SweetAlert2 for user-friendly confirmation modals

---

## 🛠️ Technologies Used

### Frontend:

- **React.js** – Component-based UI
- **React Router** – Navigation & protected routes
- **TanStack Query** – Data fetching and caching
- **Tailwind CSS + DaisyUI** – Styling and prebuilt UI components
- **React Icons** – Intuitive icons

### Backend:

- **Node.js + Express.js** – REST API
- **MongoDB** – Database for storing quotes and users
- **Firebase Authentication with JWT** – Secure user authentication

### Other Tools:

- **SweetAlert2** – Alerts and confirmations
- **React Responsive Carousel** – Homepage slider
- **Dotenv** – Environment variable management

**Why these technologies?**  
They provide a balance of **scalability, speed, and developer productivity**.

- MERN ensures full-stack JavaScript development.
- Firebase simplifies authentication.
- TanStack Query improves API performance with caching.
- Tailwind & DaisyUI make UI design fast and consistent.

---

## 🛠️ Local Development Setup

### 1. Clone both client and server repos:

```bash
git clone https://github.com/amirsayeed/Sunnah-Sayings
git clone https://github.com/amirsayeed/Sunnah-Sayings-Server
```

### 2. Setup the server

```bash
cd Sunnah-Sayings-Server
npm install
```

Create a .env file in the server root with the following:

```bash
DB_USER=your_mongodb_user
DB_PASS=your_mongodb_password
```

Then start the server using:

```bash
nodemon index.js
```

The server will run on: http://localhost:5000

### 3. Setup the Client:

```bash
cd ../Sunnah-Sayings
npm install
```

Create a .env.local file in the root of the client directory:

```bash
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

Then start the client:

```bash
npm run dev
```

The client will run at: http://localhost:5173
