# 🎬 Movie Explorer App

A sleek and responsive movie browsing web app built using React and Tailwind CSS. It allows users to explore trending movies, search for any title, and view detailed information. Powered by the TMDB API and Appwrite for cloud database integration.

---

## 🚀 Live Demo

🔗 **Coming soon...**  
(_Will be deployed on Vercel or Netlify_)

---

## 🧩 Features

-   🔍 Real-time movie **search** with debounce
-   📊 Displays **trending movies** using TMDB API
-   🃏 **Flip card animation** to reveal:
    -   Movie synopsis
    -   Streaming platform logos
    -   Watch links (optional)
-   🧪 Loading spinner while fetching API data
-   📱 Fully responsive layout
-   🌙 Clean and modern UI with Tailwind CSS

---

## 🛠️ Tech Stack

| Area            | Technologies Used                  |
| --------------- | ---------------------------------- |
| Frontend        | React 19, JSX, Hooks, Tailwind CSS |
| Build Tool      | Vite                               |
| State & Hooks   | React Hooks, `react-use`           |
| API Integration | TMDB API                           |
| Cloud Backend   | Appwrite (Database only)           |
| Code Quality    | ESLint with React plugin           |
| Deployment      | Vercel (planned)                   |

---

## ☁️ Backend Integration with Appwrite

This project uses **Appwrite’s cloud database** to manage dynamic movie-related data.

-   📁 Cloud collection for storing/fetching content
-   📤 Integrated Appwrite SDK with React for API calls
-   📦 BaaS (Backend-as-a-Service) usage without writing custom backend
-   🔐 NoAuth/Auth-Free DB access (based on project settings)

---

## 📂 Folder Structure

```
movie-app/
├── public/
│   ├── icons/         # Streaming platform logos
│   └── screenshot.png # (Add if you want)
├── src/
│   ├── components/    # MovieCard, SearchBar, etc.
│   ├── pages/         # Home page layout
│   ├── App.jsx
│   └── index.css
├── .env
├── package.json
└── vite.config.js
```

---

## 📦 How to Run Locally

```bash
git clone https://github.com/HarshlyHk/movie-app.git
cd movie-app
npm install
touch .env  # Add your TMDB API key
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file in the root folder and add your API key:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

You can get your key from: [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)

---

## 🧠 Skills Demonstrated

-   ⚛️ **React 19** with modern Hooks (`useEffect`, `useState`, and `react-use`)
    ![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)

-   🎨 **Tailwind CSS 4.1** for responsive, utility-first styling  
    ![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?logo=tailwindcss)

-   ⚙️ **Vite 7** for lightning-fast builds and hot reloading  
    ![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?logo=vite)

-   ☁️ **Appwrite (BaaS)** to manage cloud-hosted movie data  
    ![Appwrite](https://img.shields.io/badge/Appwrite-BaaS-F02E65?logo=appwrite)

-   📡 **TMDB API** for trending/search movie data  
    ![TMDB API](https://img.shields.io/badge/TMDB-API-0db7ed?logo=themoviedatabase)

-   🧼 **ESLint** for code linting and formatting  
    ![ESLint](https://img.shields.io/badge/ESLint-Configured-4B32C3?logo=eslint)

-   🛠️ **Git + GitHub** for version control and collaboration  
    ![GitHub](https://img.shields.io/badge/GitHub-Version_Control-181717?logo=github)

## 📸 Screenshots

### 🏠 Home Screen

![Home Screen & Search](public/Home_Screen.png)

### 🎬 Movie Info (Back Side Flip)

![Movie About & Flip](public/Movie_about.png)

### 🔍 Search & Result State

![Search Screen](public/Trending_All.png)

---

## 🙋‍♂️ Author

-   **Harsh Kumar**  
    React & AI/ML Enthusiast | Full-stack Learner  
    [GitHub Profile](https://github.com/HarshlyHk)
    📧 Email: harsh4212002@gmail.com

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
