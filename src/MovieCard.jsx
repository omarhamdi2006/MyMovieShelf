import { useState } from "react";

export default function MovieCard({ data , addMovieToShelf}) {


  const handleShelfMovies=()=>{
    addMovieToShelf({"title": data.Title,"poster":data.Poster,"year":data.Year})
  }

  const [imageSrc,setImageSrc] = useState(data.Poster)

  return (
    <div className="p-4 w-3xs shadow-gray-950 flex flex-col justify-center items-start gap-3 bg-gray-950 rounded-xl">
       <img className="w-1/1 h-80 rounded-xl" src={imageSrc} onError={()=>{
        setImageSrc("https://placehold.co/600x750?text=Image+Not+Found")
       }} /> 
      
      <h2 className="font-bold text-xl text-main">{data.Title}</h2>
      <p className="line-clamp-2">{data.Year}</p>
      <p className="line-clamp-2">{data.Type}</p>

      <div className="flex flex-row justify-between items-center flex-nowrap w-1/1">
        </div>
        <div className="bg-main text-gray-950 rounded-lg px-2.5 py-1 font-semibold cursor-pointer  hover:bg-back hover:text-white
        transition-all duration-300">
          Show Details
        </div>
        <div
        onClick={handleShelfMovies}
        className="bg-main text-gray-950 rounded-lg px-2.5 py-1 font-semibold cursor-pointer hover:bg-back hover:text-white 
        transition-all duration-300">
          Add to Shelf
        </div>

      </div>
  );
}
