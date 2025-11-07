import { useState, useEffect } from "react";
import "./App.css";
import LoginForm from "./components/loginForm";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow-lg p-4">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default App;
