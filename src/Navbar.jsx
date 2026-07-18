import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center py-5 mx-10  font-logo ">
      <h1 className="text-2xl font-bold "><a href="/">MovieShelf</a></h1>
      <ul className="flex flex-row justify-center items-center gap-4 list-none ">
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
