import { Link, Route, Routes } from "react-router";
import "./App.css";
import Notes from "./Pages/Notes";
import ColorGenerator from "./Pages/ColorGenerator";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/color-generator" element={<ColorGenerator />} />
      </Routes>
    </>
  );
}

export default App;
