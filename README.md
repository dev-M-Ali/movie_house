# 🎬 Movie House

> **A modern movie management web app for FAST-NUCES Advanced Programming (Spring 2025)**

Movie House is a full-featured web application built with **Next.js** and **Ant Design**. It lets users browse, search, and filter movies, genres, and directors, with a responsive UI and support for dark/light themes. The project demonstrates advanced React and Next.js concepts, including SSG, SSR, CSR, API routes, and context-based state management.

---

## 🚩 Features

- **Browse & Search:** View trending movies, filter by genre, and search for directors.
- **Genres & Directors:** Dedicated pages for genres and directors, with nested and dynamic routing.
- **Movie Details:** Each movie has a detailed page, including director info and genre.
- **Filtering:** Filter movies by genre using dropdowns or genre pages.
- **Dark/Light Mode:** Toggle theme with persistence using localStorage and React Context.
- **Responsive UI:** Built with Ant Design and CSS Modules for a clean, modern look.
- **Custom 404:** Friendly error page for invalid routes.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Frontend:** React 19, Ant Design
- **State:** React Context API
- **Data:** Static JSON (for demo), MongoDB (API routes)
- **Styling:** CSS Modules, Ant Design
- **Other:** SWR (client-side fetching), Theme toggles

---

## 📦 Data Model

- **Movies:** Title, description, release year, rating, genre, director
- **Genres:** Science Fiction, Adventure, Drama, Thriller
- **Directors:** Christopher Nolan, Baz Luhrmann, Bong Joon-ho, The Wachowskis, Damien Chazelle, Denis Villeneuve

---

## 📄 Pages & Routing

- `/` — Home (Trending movies, SSG)
- `/movies` — All movies, filter by genre (SSG)
- `/movies/[id]` — Movie details (dynamic route)
- `/genres` — Genre list (SSR)
- `/genres/[genreID]` — Movies by genre (dynamic route)
- `/directors` — Director list (CSR)
- `/directors/[id]` — Director details (dynamic route)
- `/help/[...slugs]` — Catch-all help pages
- `/404` — Custom error page

---

## ⚡ Rendering Strategies

- **SSG:** Home, movies list
- **SSR:** Genres page
- **CSR:** Directors page (with SWR)
- **API Routes:** `/api/movies`, `/api/genres`, `/api/directors` (MongoDB)

---

## 🌓 Theme Support

- Toggle dark/light mode from the header
- Theme state is persisted in localStorage
- Uses Ant Design's `ConfigProvider` for theme switching

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/movie-house.git
   cd movie-house
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Set up environment variables**
   - Copy `.env.example` to `.env.local` and set your MongoDB URI:
   ```env
   MONGODB_URI=mongodb://localhost:27017/moviehouse
   # Or use your MongoDB Atlas URI
   ```
4. **Run the development server**
   ```bash
   npm run dev
   ```
5. **Open your browser**
   - Go to [http://localhost:3000](http://localhost:3000)

---

## 🧑‍💻 Assignment Requirements

### Assignment 2
- Next.js routing strategies (SSG, SSR, CSR)
- Dynamic and nested routes
- Catch-all help routes
- Custom 404 page
- JSON data handling

### Assignment 3
- Ant Design UI integration
- Backend API routes (MongoDB)
- React Context for global state
- Dark mode toggle with persistence
- Modular, clean code structure

---

## 🗂️ Example Data

Sample movies, genres, and directors are provided in `data/data.json` for demo/testing. API routes use MongoDB for persistent storage.

---

## 🖼️ UI Components

- **MovieCard:** Displays movie info with Ant Design Card
- **Header:** App bar with theme toggle
- **Genre/Director Lists:** Linked lists for navigation
- **Forms:** Genre filter dropdown, search inputs

---

## 📚 API Endpoints

- `GET /api/movies` — All movies
- `GET /api/movies/[id]` — Movie by ID
- `GET /api/genres` — All genres
- `GET /api/genres/[id]/movies` — Movies by genre
- `GET /api/directors` — All directors
- `GET /api/directors/[id]` — Director details

---

## 📖 Credits

Built by Ali for Advanced Programming @ FAST-NUCES (Spring 2025)

---

## 📬 Contact

For questions or feedback, open an issue or contact the course instructor.