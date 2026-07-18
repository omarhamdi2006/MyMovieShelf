export default function SearchBar({ query,setQuery,fetchMovies }) {

  const handleSubmit = (e) =>{
    e.preventDefault()
    handleSearchClick()
  }

  const handleSearchClick = () =>{
    fetchMovies(query)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-center border-main border-2 rounded-3xl  px-5 text-left pr-0 py-1.25 font-text mx-2 
       ">
        <input
          className="outline-none  w-full  mx-2 sm:focus:pr-80   transition-all duration-200"
          type={"text"}
          value={query}
          placeholder="ex: Breaking Bad"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          onClick={handleSearchClick}
          className="bg-main font-bold text-black rounded-2xl px-2.5 py-1.25 cursor-pointer  hover:bg-back hover:text-white 
        transition-all duration-150 "
          style={{ marginTop: "-20px", marginBottom: "-20px" }}
        >
          Search
        </button>
      </div>
      </form>
    </>
  );
}
