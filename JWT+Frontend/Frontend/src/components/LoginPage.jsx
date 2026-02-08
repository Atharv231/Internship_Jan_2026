import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import "../App.css";

function LoginPage() {
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login({ username, password });
      navigate("/dashboard");
    } catch {
      setError("Invalid credentials");
    }
  };

  return (
    <section className="page">
      <div className="login">
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter UserName"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;
