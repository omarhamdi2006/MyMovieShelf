import { useLocation } from "react-router-dom"
import Navbar from "./Navbar";
export default function Details() {

    const location = useLocation();

    const movie = location.state.movieData;
    if (!movie) {
    return (
        <>
        <Navbar/>
      <div className="p-8 text-white">
        <h2>No movie data found.</h2>
      </div>
      </>
    );
  }
  return (
    // movie details
    <>
            <Navbar/>

<div className="p-8  mx-auto flex  flex-col md:flex-row  gap-8 text-white">
      <img className="w-70 rounded-xl" src={movie.Poster} alt={movie.Title} />
      
      <div className="flex flex-col gap-4 font-text">
                    <h1 className="text-6xl font-bold text-main">{movie.Title}</h1> 
                    <a href={`https://www.imdb.com/title/${movie.imdbID}/`} target="_blank" className="bg-yellow-400 text-black
                    rounded-md w-max h-max font-bold px-2 hover:scale-105 transition-all duration-150">IMDB Page</a>

        <p className="text-lg font-bold"> {movie.Year}</p>
        <p className="text-lg"> {movie.Type === "movie" ? "Movie" : "Series"}</p>
        <p className="text-2xl">{movie.Plot}</p>
        <p className="text-xl font-bold">Language : {movie.Language}</p>
        <p className="text-2xl font-bold bg-card px-2 w-max ">Ratings </p>
        <p className="text-lg font-bold">IMDB :  {movie.Ratings[0].Value}</p>
        <p className="text-lg font-bold">Rotten Tomatoes : {movie.Ratings[1].Value}</p>


       
        
      </div>
    </div> 
    </> )
}
