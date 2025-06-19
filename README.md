# 🎬 MovieExplorer

MovieExplorer is a full-stack Next.js application that allows users to discover, search, and manage their favorite movies.
It integrates with the TMDB API and provides secure user authentication using NextAuth.js (Google OAuth and Credentials login).

---

## ✨ Features

- 🔎 **Search Movies** (full text search, discover, trending, popular)
- 📊 **TMDB API Proxy** (secured backend API routes)
- ❤️ **Favorites Management** (stored with React Context & LocalStorage)
- 🔐 **Authentication**
  - Google OAuth (NextAuth.js)
  - Email/Password Credentials (mocked)
- 🧑‍💻 **Next.js App Router (v15)**
- 🌐 **Responsive UI with TailwindCSS**
- 🍞 **Toast notifications** for user feedback
- 🛡 **Protected routes** (Favorites page requires login)
- 🚀 Fully ready for deployment

---

## 🛠 Tech Stack

- Next.js 15 (App Router, Server Actions, API Routes)
- React
- NextAuth.js (Authentication)
- TMDB API (Movie Database)
- TailwindCSS (Styling)
- React Context (State management)
- React-Hot-Toast (Notifications)

## 🚀 Setup Instructions

1️⃣ **Clone the Repository**

```bash
git clone https://github.com/RIDagher/movie-explorer-next.git
cd movie-explorer-next
```

2️⃣ **Install Dependencies**

- npm install

3️⃣ **Setup Environment Variables**

- TMDB_API_KEY=
- GOOGLE_CLIENT_ID=
- GOOGLE_CLIENT_SECRET=
- NEXTAUTH_SECRET=
- NEXTAUTH_URL=http://localhost:3000

4️⃣ **Run Development Server**

- npm run dev

🔒 Security Notes

- Favorites are client-stored (localStorage) for demo purpose.
