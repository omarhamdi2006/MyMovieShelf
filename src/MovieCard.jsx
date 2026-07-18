import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function MovieCard({ data , addMovieToShelf}) {

  const handleShelfMovies=()=>{
    addMovieToShelf({"title": data.Title,"poster":data.Poster,"year":data.Year})
  }

  const [imageSrc,setImageSrc] = useState(data.Poster)
  const navigate = useNavigate();

  const handleDetails = () =>{
    navigate(`/data/${data.imdbID}`,{state : {movieData: data}})
  }

  return (
    <div className="p-4 w-3xs h-137.5  shadow-gray-950 flex flex-col justify-between items-start gap-1 bg-card rounded-xl font-text ">
       <img className="w-full h-80 rounded-xl object-cover shrink-0" src={imageSrc} onError={()=>{
        setImageSrc("https://placehold.co/600x750?text=Image+Not+Found")
       }} /> 
      
      <h2  className="font-bold text-2xl text-main ">{data.Title}</h2>
      <p className="">{data.Year}</p>
      <p className="">{data.Type}</p>

      <div className="flex flex-row  flex-nowrap w-full gap-2 justify-center">

        
        
        <div className="bg-main text-gray-950 rounded-lg  font-semibold cursor-pointer p-1  hover:bg-back hover:text-white
        transition-all duration-300" onClick={handleDetails}>
          Show Details
        </div>
        <div
        onClick={handleShelfMovies}
        className="bg-main text-gray-950 rounded-lg p-1 font-semibold cursor-pointer hover:bg-back hover:text-white 
        transition-all duration-300">
          Add to Shelf
        </div>

        </div>

      </div>
  );
}
