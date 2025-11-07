import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
