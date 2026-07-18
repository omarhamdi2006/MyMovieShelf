import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
export default function Shelf() {
  // make a function with useState that sets recieved movies outside useEffect

  const [recievedMovies,setRecievedMovies] = useState(()=>{
    const movieString = localStorage.getItem("movies");
    return movieString ? JSON.parse(movieString) : [];
  }) 
  // console.log(recievedMovies)
  // clearer function for localStorage

  const clearMovies = () =>{
    localStorage.clear()
    setRecievedMovies([])
  }

  // remove movie
  const removeMovie = (title) =>{
    const updatedItems = recievedMovies.filter((m) => m.title !== title)
    setRecievedMovies(updatedItems)
    localStorage.setItem("movies",JSON.stringify(updatedItems))

    setRatings((prev)=>{
      const ratingsBuffer = {...prev};
      delete ratingsBuffer[title];
      return ratingsBuffer;
    })    

    setNotes((prev) =>{
      const notesBuffer = {...prev};
      delete notesBuffer[title];
      return notesBuffer;
    })

  }

  // rating states and funcs
  const [ratings,setRatings] = useState(() => {
    const savedRatings = localStorage.getItem("movieRatings")
    return savedRatings ? JSON.parse(savedRatings) : {};
  });

  useEffect(() => {
    localStorage.setItem("movieRatings",JSON.stringify(ratings))
  },[ratings])


  const handleRating = (movieTitle,rate) =>{
    setRatings((prevRatings) => ({...prevRatings,[movieTitle] : rate}))
  }

  // notes states and funcs
  const[notes,setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("movieNotes")
    return savedNotes ? JSON.parse(savedNotes) : {};
  })
  
  useEffect(() => {
    localStorage.setItem("movieNotes",JSON.stringify(notes))
  },[notes])

  const handleNotes = (movieTitle,note) => {
    setNotes((prevNotes) => ({...prevNotes,[movieTitle] : note}))
  }

  return (
    <>
      <Navbar />
      {recievedMovies.length > 0 ?       <div className="shelf-container flex flex-col w-full h-max  font-text items-center">
        {recievedMovies.map((movieObj)=>(
          <div className="movie-card m-8 flex flex-row flex-wrap md:flex-nowrap gap-10 text-wrap w-[80%] bg-card p-5 rounded-xl  " key={movieObj.title}>
            <img className="w-50" src={movieObj.poster}/>
            <div className="text flex flex-col">
              <h3 className="font-bold text-2xl">{movieObj.title}</h3>
              <p className="mb-5">{movieObj.year}</p>
              
              <p className="user-rating text-lg mb-5">your rating (out of 10) :  <span className="font-bold">
                <input type="text" placeholder="rating..." className="outline-none" 
                value={ratings[movieObj.title] < 0 || ratings[movieObj.title] > 10 ? 0 : ratings[movieObj.title] 
                } 
                onChange={(e)=>handleRating(movieObj.title,e.target.value)} />
                </span></p>
              
              
              <div className="user-note flex flex-col gap-2">
                <p className="bg-back w-max px-2 rounded-sm text-lg ">User note : </p>
                <input type="text" placeholder="What do you think about the movie ? ...." 
                 className="text-lg  text-wrap mb-2 outline-none"
                value={notes[movieObj.title]}
                 onChange={(e) => handleNotes(movieObj.title,e.target.value)} ></input>
                <button onClick={()=> removeMovie(movieObj.title)} className="rounded-md p-1 bg-main  text-gray-950 font-black w-max 
                font-text cursor-pointer hover:scale-101 hover:bg-back hover:text-white hover:border-1 hover:border-white transition-all duration-150">remove from shelf</button>
              </div>
            </div>

          </div>
        ))}
          <button onClick={clearMovies} className="rounded-md p-1 bg-main  text-gray-950 font-black font-text 
          cursor-pointer hover:scale-101 hover:bg-amber-600 transition-all duration-150">clear list</button>

      </div>
 : (
      <div className="my-10 font-text"> 
      <h1 className="text-center text-4xl">you didn't add any movies to the shelf</h1>
            <h1 className="text-center text-4xl">Search for your Movie in <Link to="/" className="font-black underline">Home</Link></h1>


      </div>)
      }
      <Footer/>
    </>
  );
}

