import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const [userProfile, setUserProfile] = useState({
    name: "Welcome",
    initials: "U"
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchLastUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const response = await fetch("https://zerodha-backend-mtpe.onrender.com/univers", {
          headers: { "Authorization": `Bearer ${token}` }
        });

        if (response.ok) {
          const data = await response.json();
          setEmail(data.email); // Auto-fill email if token is valid
          const initials = data.name
            ? data.name.split(" ").map(n => n[0]).join("").toUpperCase()
            : "U";

          setUserProfile({ name: data.name, initials, email: data.email });
        }
      } catch (err) {
        console.error("Session expired or fetch error:", err);
      }
    };
    fetchLastUser();
  }, []);



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://zerodha-backend-mtpe.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userName", data.name);

        onLogin(data);
        navigate('/');
      } else {
        alert(data.error || data.message || "Invalid Credentials");
      }
    } catch (error) {
      console.error("Login Client Error:", error);
      alert("Server error. Please check the console.");
    }
  };


  return (
    <div className="login-screen">
      <div className="login-card">
        <div className="avatar">{userProfile.initials}</div>
        <h1 className="user-id">{userProfile.name}</h1>
        <p className="user-email" style={{ color: "#9b9b9b", fontSize: "14px", marginBottom: "15px" }}>
          {userProfile.email}
        </p>

        <button className="btn-change-user">Change user</button>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label className="floating-label">Email / User ID</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="password-input"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label className="floating-label">Password</label>
            <div className="input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="password-input"
                autoFocus
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="toggle-password"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          <button type="submit" className="btn-login">Login</button>
        </form>

        <a href="#" className="forgot-link">Forgot user ID or password?</a>
      </div>

      <footer className="login-footer">
        <div className="footer-icons">
          <img style={{ marginRight: "25px" }} src='/images/android.svg' alt="android" />
          <img src='/images/apple.svg' alt="apple" />
        </div>
        <a href='https://zerodha-clone-k5wh.onrender.com'>
        <div className="footer-logo">
          <img src='/images/logo.svg' alt="logo" />
        </div>
        </a>
        <a href="#" className="signup-link">Don't have an account? Sign up for free!</a>
        <p className="legal-text">
          Zerodha Broking Limited: Member of NSE, BSE, MCX - SEBI Reg. <br />
          no. INZ000031633, CDSL - SEBI Reg. no. IN-DP-431-2019 | <br />
          <a href="#">Smart Online Dispute Resolution</a> | <a href="#">SEBI SCORES</a>
        </p>
        <p className="version">v3.0.0</p>
      </footer>
    </div>
  );
};

export default LoginPage;