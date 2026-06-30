export default function MovieCard({ data }) {
  return (
    <div className="p-4 w-3xs shadow-gray-950 flex flex-col justify-center items-start gap-3 bg-gray-100 rounded-xl">
      <img className="w-1/1 h-80 rounded-xl" src={data.Poster} />
      <h2 className="font-bold text-xl text-gray-900">{data.Title}</h2>
      <p className="line-clamp-2">{data.Plot}</p>
      <div className="flex flex-row justify-between items-center flex-nowrap w-1/1">
        <div className="font-semibold">{data.imdbRating}</div>
        <div className="bg-black text-gray-100 rounded-lg px-2.5 py-1 font-semibold">
          Show Details
        </div>
      </div>
    </div>
  );
}
