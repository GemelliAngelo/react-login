import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Contact from "../pages/contact";

export default function LoginForm() {
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    fetch("http://localhost:3000/login", requestOptions)
      .then((res) => res.json())
      .then((data) => navigate("/contact", { state: { user: data.user } }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          onChange={handleChange}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="email"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          onChange={handleChange}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          name="password"
        />
      </div>
      <button type="submit" className="btn btn-dark">
        Submit
      </button>
    </form>
  );
}
