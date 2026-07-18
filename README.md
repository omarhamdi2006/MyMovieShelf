# MyMovieShelf

A modern web application for discovering, searching, and managing your personal movie collection. Browse popular movies, search for your favorites, add them to your shelf, and rate your viewing experiences.

## Overview

MyMovieShelf is a React-based movie discovery and management application that allows users to search for movies and TV series using the OMDB API, save them to a personal shelf in the local storage of your browser, and view detailed information about each title.

## Live Demo

The application is deployed and available at: https://my-movie-shelf-three.vercel.app

## Features

- Browse popular movies and series from a curated initial list
- Search for movies and TV series by title
- Add movies to your personal shelf for later reference
- View detailed information about each movie including ratings, plot, and cast
- Persistent storage using browser localStorage
- Responsive design that works on all devices
- Clean and intuitive user interface

## Tech Stack

- **Frontend Framework**: React 19.2.7
- **Routing**: React Router DOM 7.18.1
- **Styling**: Tailwind CSS 4.3.2
- **Build Tool**: Vite 8.1.1
- **API**: OMDB API for movie data
- **Deployment**: Vercel

## Project Structure

```
src/
├── main.jsx           # Application entry point
├── App.jsx            # Main app component with routing
├── Home.jsx           # Home page with search functionality
├── Shelf.jsx          # Personal movie shelf display
├── Details.jsx        # Movie detail view
├── MovieCard.jsx      # Individual movie card component
├── SearchBar.jsx      # Search input component
├── Navbar.jsx         # Navigation bar component
├── Footer.jsx         # Footer component
├── Loading.jsx        # Loading state component
├── App.css            # Application styles
├── index.css          # Global styles
└── assets/            # Static assets directory
```

## Routes

- `/` - Home page with search and initial movie recommendations
- `/shelf` - Personal movie shelf containing saved movies
- `/data/:imdbID` - Detailed view of a specific movie

## Getting Started

### Prerequisites

- Node.js 14 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/omarhamdi2006/MyMovieShelf.git
cd MyMovieShelf
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your OMDB API key:
```
VITE_MYKEY=your_omdb_api_key_here
```

Get your free API key from: https://www.omdbapi.com/apikey.aspx

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Build the project for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## Features in Detail

### Search Functionality

Users can search for any movie or TV series title. The search is powered by the OMDB API and displays results in real-time.

### Movie Shelf

The personal shelf stores movies using the browser's localStorage. Movies persist between sessions, allowing users to maintain their collection over time.

### Movie Details

Clicking on a movie provides detailed information including plot summary, ratings, release date, cast, and other metadata retrieved from OMDB.

## Dependencies

- **react** - UI library
- **react-dom** - React DOM rendering
- **react-router-dom** - Client-side routing
- **tailwindcss** - Utility-first CSS framework
- **@tailwindcss/vite** - Tailwind CSS Vite integration

## Dev Dependencies

- **vite** - Modern build tool
- **@vitejs/plugin-react** - React support for Vite
- **eslint** - Code linting
- **eslint-plugin-react-hooks** - React hooks linting rules
- **eslint-plugin-react-refresh** - Fast refresh linting rules

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome. Please feel free to submit a pull request with any improvements or bug fixes.

## Author

Created by [omarhamdi2006](https://github.com/omarhamdi2006)
