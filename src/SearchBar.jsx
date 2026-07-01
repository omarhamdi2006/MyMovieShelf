export default function SearchBar({ query, queryChange }) {
  return (
    <>
      <div className="flex items-center justify-center border-gray-400 border-2 rounded-3xl text-start px-5 pr-0 py-1.25">
        <input
          className="outline-none w-xl"
          type={"text"}
          value={query}
          onChange={queryChange}
          placeholder="ex: Breaking Bad"
        />
        <div
          className="bg-black font-bold text-white rounded-2xl px-2.5 py-1.25 "
          style={{ marginTop: "-20px", marginBottom: "-20px" }}
        >
          Search
        </div>
      </div>
    </>
  );
}
