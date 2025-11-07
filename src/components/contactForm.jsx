import { useState } from "react";

export default function ContactForm({ user }) {
  const [formData, setFormData] = useState({
    to: user.email,
  });

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

    fetch("http://localhost:3000/contact", requestOptions)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputSubject" className="form-label">
          Subject
        </label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          id="exampleInputSubject"
          name="subject"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          onChange={handleChange}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          name="message"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-dark">
        Submit
      </button>
    </form>
  );
}
