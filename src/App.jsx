import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home.jsx";
import Shelf from "./Shelf.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shelf" element={<Shelf />} />

      </Routes>
    </>
  );
}

export default App;
