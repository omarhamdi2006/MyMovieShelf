import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Shelf() {
  // make a function with useState that sets recieved movies outside useEffect

  const [recievedMovies,setRecievedMovies] = useState(()=>{
    const movieString = localStorage.getItem("movies");
    return movieString ? JSON.parse(movieString) : [];
  }) 

  // clearer function for localStorage

  const clearMovies = () =>{
    localStorage.clear()
    setRecievedMovies([])
  }

  return (
    <>
      <Navbar />

      <div className="shelf-container flex flex-col flex-wrap w-full h-max">
        {recievedMovies.map((movieObj,idx)=>(
          <div className="movie-card m-8 flex flex-row flex-wrap text-wrap w-100 " key={idx}>
            <img className="w-1/1" src={movieObj.poster}/>
            <h3>{movieObj.title}</h3>
          </div>
        ))}
      </div>

      <button onClick={clearMovies} className="border border-2-black m-20 ">Clear List !</button>
    </>
  );
}

