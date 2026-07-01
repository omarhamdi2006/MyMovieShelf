/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import SearchBar from "./SearchBar";
const imdbKey = import.meta.env.VITE_MYKEY;

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [movieTitles, setMovieTitles] = useState([
    "Prison Break",
    "Breaking Bad",
    "Stranger Things",
    "Game Of Thrones",
    "The Vikings",
    "The Hunter",
    "Dexter",
    "John Wick",
  ]);
  const [movies, setMovies] = useState([]);
  const [currMovie, setCurrMovie] = useState(null);
  const [title, setTitle] = useState("");
  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const res = await fetch(
    //       `http://www.omdbapi.com/?t=${"Prison+Break"}&apikey=362de1df`,
    //     );
    //     if (!res.ok) throw new Error(`Http error! status:${res.status}`);
    //     const result = await res.json();
    //     console.log(result);
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // };
    // fetchData();
    let isMounted = true;

    const fetchAllMovies = async () => {
      try {
        const promises = movieTitles.map(async (m) => {
          const res = await fetch(
            `http://www.omdbapi.com/?t=${m.replaceAll(" ", "+")}&apikey=${imdbKey}`,
          );
          if (!res.ok)
            throw new Error(`Error in http request, status: ${res.status}`);
          return res.json();
        });

        const results = await Promise.all(promises);

        if (isMounted) {
          setMovieTitles(results);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error in fetch movies", error);
      }
    };

    fetchAllMovies();

    return () => {
      isMounted = false;
      setLoading(false);
    };
  }, []);

  // useEffect(() => {
  //   let isMounted = true;
  //   const searchData = async () => {
  //     try {
  //       setLoading(true);
  //       const res = await fetch(
  //         `http://www.omdbapi.com/?t=${query.replaceAll(" ", "+")}&apikey=${imdbKey}`,
  //       );

  //       if (!res.ok) throw new Error(`Error searching, status:${res.status}`);
  //       const data = await res.json();
  //       setMovieTitles(data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error(error.msg);
  //     }
  //   };

  //   // searchData();

  //   return () => {
  //     setLoading(false);
  //   };
  // }, [query]);

  // const queryChange = (e) => {
  //   setQuery(e.target.value);
  // };
  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold text-center">
        Find The Perfect Movie For The Night
      </h1>
      <p className="text-xl text-center text-gray-800 mt-2">
        You can search your favorite movie and series.
      </p>
      {/* Search Box Here */}
      <div className="flex items-center justify-center my-5">
        {" "}
        {/* <SearchBar query={query} queryChange={queryChange} /> */}
      </div>
      <div className="px-20 py-7 flex flex-row gap-5 flex-wrap">
        {/* Movie cards container */}
        {loading ? (
          <Loading msg={"Movies"} />
        ) : (
          movieTitles.map((m) => <MovieCard key={m.imdbID} data={m} />)
        )}
      </div>
    </>
  );
}
