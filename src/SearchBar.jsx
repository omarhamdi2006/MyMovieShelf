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
      <div className="flex items-center justify-center border-gray-400 border-2 rounded-3xl text-start px-5 pr-0 py-1.25">
        <input
          className="outline-none w-xl"
          type={"text"}
          value={query}
          placeholder="ex: Breaking Bad"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          onClick={handleSearchClick}
          className="bg-black font-bold text-white rounded-2xl px-2.5 py-1.25 cursor-pointer  hover:bg-gray-700 "
          style={{ marginTop: "-20px", marginBottom: "-20px" }}
        >
          Search
        </button>
      </div>
      </form>
    </>
  );
}
