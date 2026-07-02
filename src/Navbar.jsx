import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center px-20 py-5">
      <h1 className="text-xl font-bold"><a href="/">MyMovieShelf</a></h1>
      <ul className="flex flex-row justify-center items-center gap-4 list-none">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shelf">
          <li>Shelf</li>
        </Link>
      </ul>
    </div>
  );
}
