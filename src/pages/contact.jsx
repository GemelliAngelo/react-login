import { useLocation } from "react-router-dom";
import ContactForm from "../components/contactForm";

export default function Contact() {
  const location = useLocation();
  const user = location.state?.user;
  return (
    <main>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="card shadow-lg p-4">
            <ContactForm user={user} />
          </div>
        </div>
      </div>
    </main>
  );
}
