import LoginForm from "../components/loginForm";

export default function Home() {
  return (
    <main>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="card shadow-lg p-4">
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}
