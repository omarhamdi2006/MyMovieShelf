import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

export default function Shelf({shelfMovies}) {


  const [recievedMovies,setRecievedMovies] = useState([])

  useEffect(()=>{
    const moviesAsText = localStorage.getItem("movies")

    if(moviesAsText){
      setRecievedMovies(JSON.parse(moviesAsText))
    }
    console.log(recievedMovies)
  },[])

  return (
    <>
   <Navbar/>

    <div className="shelf-container flex flex-row flex-wrap w-full h-max">
      <ShelfCard/>
    </div>
    

    </>
  )
}

function ShelfCard({movie}){
  return(<>

   <div className="shelf-card bg-black w-full h-100 mx-10 my-10 rounded-lg">




      </div>


    
  </>)
}