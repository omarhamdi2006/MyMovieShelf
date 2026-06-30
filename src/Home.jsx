import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import Loading from "./Loading";
const imdbKey = import.meta.env.VITE_MYKEY;

export default function Home() {
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
  const [movies, setMovies] = useState(null);
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

        console.log("--- ALL MOVIE OBJECTS ---");
        results.forEach((movie) => {
          console.log(movie);
        });
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
  return (
    <>
      <div className=""></div>
      <Navbar />
      <h1 className="text-3xl font-bold text-center">
        Find The Perfect Movie For The Night
      </h1>
      {/* Search Box Here */}
      <div className="px-20 py-7 flex flex-row gap-5 flex-wrap">
        {/* Movie cards container */}
        {loading ? (
          <Loading msg={"Movies"} />
        ) : (
          movieTitles.map((m) => <MovieCard data={m} />)
        )}
      </div>
    </>
  );
}
