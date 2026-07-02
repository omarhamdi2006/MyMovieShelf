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
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [currMovie, setCurrMovie] = useState(null);
  const [title, setTitle] = useState("");
  const [error,setError] = useState("")
  

  //fetch movies

    const fetchMovies = async (SearchQuery)=>{
      if(!SearchQuery.trim()){
        return;
      }
      setLoading(true)
      const encodedQuery = encodeURIComponent(SearchQuery);
      const url = `http://www.omdbapi.com/?apikey=${imdbKey}&s=${encodedQuery}`
      try{
        const res = await fetch(url);
        const data = await res.json();

        if(data.Response === "True"){
          setResults(data.Search)
        }else{
          setResults([])
          setError(data.Error)
        }

        //debug
        // console.log(results)

      }catch(error){
        throw new Error(error)
      }finally{
        setLoading(false)
      }
}

// Initial Fetch
    // useEffect(()=>{

    // },[])


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
        <SearchBar query={query} setQuery={setQuery} fetchMovies={fetchMovies} /> 
      </div>
      <div className="px-20 py-7 flex flex-row gap-5 flex-wrap">
        {/* Movie cards container */}
        {
          loading ? 
          <Loading/>
          :( results.map((movie)=>(
            <MovieCard key={movie.imdbID} data={movie}/>
          )
          )
        )
        }
        {
         !error.length !== 0  && (<p>{error}</p>)
        }
      
    
      </div>
    </>
  );
}
