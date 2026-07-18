import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home.jsx";
import Shelf from "./Shelf.jsx";
import Details from "./Details.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shelf" element={<Shelf />} />
        <Route path="/data/:imdbID" element={<Details/>}/>
      </Routes>
    </>
  );
}

export default App;
