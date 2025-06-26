import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
type LoginProps = {
  onClose: () => void;
};

const Login: React.FC<LoginProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const validatePassword = (pwd:string) => {
    return pwd.length >= 8 && /[a-zA-Z]/.test(pwd) && /\d/.test(pwd);
  };

  const handleLogin = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMsg("Please fill in all fields.");
      return;
    }

    if (!validatePassword(password)) {
      setErrorMsg("Password must be at least 8 characters and alphanumeric.");
      return;
    }

    // Dummy logic to simulate login
    if (email === "user@test.com" && password === "test1234") {
      setErrorMsg("");
      alert("Login successful!");
      navigate("/dashboard");
      onClose(); // Close modal
    } else {
      setErrorMsg("Invalid email or password.");
    }
  };

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="login-modal">
        <span className="cancel-icon" onClick={onClose}>✖</span>
        <h2>Your Mercedes-Benz Account</h2>
        <div className="login-message">
          Login or register to enjoy the following benefits:
          <ul style={{ marginTop: "8px", paddingLeft: "18px" }}>
            <li>Save and compare your favorite vehicles.</li>
            <li>Manage your Mercedes-Benz and digital extras.</li>
            <li>Receive personalized recommendations.</li>
          </ul>
        </div>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMsg && <div className="error-message">{errorMsg}</div>}
          <button type="submit">Login</button>
        </form>

        <div className="register-link">
          Don’t have a Mercedes me ID?{" "}
          <Link to="/register" onClick={onClose}>Register</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
