/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import SearchBar from "./SearchBar";
const imdbKey = import.meta.env.VITE_MYKEY;

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [currMovie, setCurrMovie] = useState(null);
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  // movies added to shelf
  const [shelfMovies, setShelfMovies] = useState(()=>{
      const storedMovies = localStorage.getItem("movies")
      return storedMovies ? JSON.parse(storedMovies) : []
  });


          const navigate = useNavigate();


  // add to shelf
  const addMovieToShelf = (movie) => {
          const savedStrings = localStorage.getItem("movies")
          const arrayOfMovies = savedStrings ? JSON.parse(savedStrings) : [];
          const updatedMovies = [...arrayOfMovies,movie]

          setShelfMovies(updatedMovies)
          localStorage.setItem("movies",JSON.stringify(updatedMovies))
          // navigate
          navigate("/shelf")

    //  console.log([...shelfMovies,movie])
  };

  //fetch movies

  const fetchMovies = async (SearchQuery) => {
    if (!SearchQuery.trim()) {
      return;
    }
    setLoading(true);
    const encodedQuery = encodeURIComponent(SearchQuery);
    const url = `http://www.omdbapi.com/?apikey=${imdbKey}&s=${encodedQuery}`;
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.Response === "True") {
        setResults(data.Search);
      } else {
        setResults([]);
        setError(data.Error);
      }

      //debug
      // console.log(results)
    } catch (error) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  // Initial Fetch
  useEffect(() => {
    const initFetch = async () => {
      const initialList = [
        "Fight Club",
        "Pulp Fiction",
        "Catch me if you can",
        "Breaking Bad",
        "Training Day",
        "Oppenheimer",
      ];

      setLoading(true);
      try {
        const fetchPromises = initialList.map(async (title) => {
          const encodedTitle = encodeURIComponent(title);
          const url = `http://www.omdbapi.com/?apikey=${imdbKey}&t=${encodedTitle}`;
          const res = await fetch(url);
          return res.json();
        });

        const moviesData = await Promise.all(fetchPromises);

        const fetchedMovies = moviesData.filter(
          (movie) => movie.Response === "True",
        );
        setResults(fetchedMovies);
      } catch (error) {
        throw new Error(error);
      } finally {
        setLoading(false);
      }
    };
    initFetch();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center text-center mt-8 flex-wrap">
        <h1 className="text-5xl font-black">
          Find, Store and Rate you favourite movies in your{" "}
          <span className="underline">
            <Link to="/shelf">Shelf</Link>
          </span>{" "}
          !{" "}
        </h1>
      </div>
      <p className="text-xl text-center mt-2">
        You can search your favorite movie and series.
      </p>
      {/* Search Box Here */}
      <div className="flex items-center justify-center my-5">
        {" "}
        <SearchBar
          query={query}
          setQuery={setQuery}
          fetchMovies={fetchMovies}
        />
      </div>
      <div className="px-20 py-7 flex flex-row items-center justify-center gap-5 flex-wrap">
        {/* Movie cards container */}
        {loading ? (
          <Loading />
        ) : (
          results.map((movie) => <MovieCard key={movie.imdbID} data={movie} addMovieToShelf={addMovieToShelf} />)
        )}
        {error.length !== 0 && <p>{error}</p>}
      </div>
    </>
  );
}
