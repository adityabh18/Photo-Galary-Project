========== Photo Gallery Web App =============

A responsive Photo Gallery Web App built using React, Vite, and Tailwind CSS as part of a frontend development assignment.

The application fetches photos from an external API and allows users to search photos by author name and manage their favorite photos.

#Features

* Photo Gallery: Fetches and displays 30 photos using the Picsum Photos API.
* Responsive Design: Responsive grid layout for mobile, tablet, and desktop screens.
* Search Photos: Search photos by author name without making additional API requests.
* Favorites: Add or remove photos from favorites.
* Persistent Favorites: Favorite photos are saved in localStorage and remain available after refreshing the page.
* Loading State: Displays a loader while photos are being fetched.
* Error Handling: Handles API errors and displays an appropriate error message.
* Dark Theme: Clean and modern dark user interface.

========== Tech Stack ===============

* React.js
* Vite
* JavaScript
* Tailwind CSS
* Picsum Photos API
* React Hooks: `useState`, `useEffect`, `useCallback`, `useMemo`, and `useReducer`
* Browser localStorage

#=========== API Used =============

The application uses the Picsum Photos API to fetch photos.

API Endpoint:

`https://picsum.photos/v2/list?limit=30`

No API key is required.

#================= Getting Started ===================

Follow these steps to run the project locally.

# 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual GitHub repository URL.

# 2. Navigate to the Project Folder

```bash
cd YOUR_PROJECT_FOLDER
```

Replace `YOUR_PROJECT_FOLDER` with the actual project directory name.

# 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in the terminal, usually:

`http://localhost:5173`

### 5. Create a Production Build

To create an optimized production build, run:

```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
src/
├── components/
│   ├── PhotoCard.jsx
│   ├── PhotoGrid.jsx
│   ├── Loading.jsx
│   └── SearchBar.jsx
├── hooks/
│   └── useFetchPhotos.js
├── reducers/
│   └── favoritesReducer.js
├── App.jsx
├── index.css
└── main.jsx

public/
package.json
index.html
vite.config.js
```

#================ How It Works =========================

1. The application fetches photos from the Picsum Photos API.
2. A loading indicator is displayed while the request is in progress.
3. Photos are rendered using reusable components.
4. The search feature filters photos by author name.
5. The `useReducer` hook manages favorite photo actions.
6. Favorites are synchronized with localStorage to preserve them across page refreshes.
7. Responsive CSS ensures the gallery works across different screen sizes.

#================= Key Learning Outcomes ==================

* Building reusable React components.
* Managing state using React Hooks.
* Implementing custom hooks for API requests.
* Using `useReducer` to manage related state updates.
* Optimizing rendering with `useMemo` and `useCallback`.
* Working with browser localStorage.
* Handling API loading and error states.
* Creating responsive user interfaces.

# Author -> Aditya Rajbhar

* GitHub: https://github.com/adityabh18
* LinkedIn: https://www.linkedin.com/in/aditya-rajbhar-96a3b9330/
* Portfolio: https://bhaditya18.netlify.app/

---

Built with React as part of a frontend development assignment.
