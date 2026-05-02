import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Hero.css";

const Hero = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const ref = useRef();

  //Fetch user from backend
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      // Check if token exists AND is not the string "undefined"
      if (!token || token === "undefined") {
        setUser({ name: "Guest User" });
        return;
      }

      try {
        const res = await axios.get("http://localhost:8080/univers", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(res.data);
      } catch (err) {
        console.error("Fetch error:", err);
        setUser({ name: "User Not Found" });
      }
    };
    fetchUser();
  }, []);



  //Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  //Generate initials
  const getInitials = (name) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  // Logout
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8080/logout", {}, { withCredentials: true });

      // Clear the token from storage
      localStorage.removeItem("token");

      window.location.href = "/";
    } catch (err) {
      console.error("Logout failed", err);
      localStorage.removeItem("token");
      window.location.href = "/";
    }
  };

  return (
    <div className="page">
      {/* Navbar */}
      <div className="navbar navbar-expand-lg border-bottom sticky-top">
        <Link className="navbar-brand" to="/">
          <img src='/media/images/logo.svg' alt='logo' style={{ width: "15%", marginLeft: "280px" }} />
        </Link>

        <div className="user-container" ref={ref} style={{ marginRight: "280px" }}>
          <div className="user" onClick={() => setOpen(!open)}>
            <div className="avatar" >
              {getInitials(user?.name)}
            </div>

            <span>
              {user?.name ? `${user.name}` : "Guest User"} {open ? <i style={{ color: "#2f6fc0" }} class="fa-solid fa-angle-up"></i> : <i style={{ color: "#2f6fc0" }} class="fa-solid fa-angle-down"></i>}
            </span>
          </div>

          {open && (
            <div className="dropdown" style={{ paddingRight: "10px" }}>
              <p className="dropdown-header mb-3 border-bottom" style={{ paddingBottom: "15px" }}>
                {user?.name || "User"}
              </p>
              <Link style={{ textDecoration: "none", color: "black" }} to="/support"><p className="border-bottom" style={{ paddingBottom: "15px" }}><i class="fa-regular fa-circle-question"></i>&nbsp; Need help?</p></Link>
              <p className="logout" onClick={handleLogout}>
                <i class="fa-solid fa-arrow-right-from-bracket"></i>&nbsp; Logout
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero-container">
        <div className="hero-card">
          <div className="hero-left">
            <h1>
              Your Zerodha account is active <span>🎉</span>
            </h1>

            <p className="text-muted" style={{ fontSize: "15px" }}>
              To get started, log in to Zerodha Kite using your User ID and
              password.<br /> You can refer to your registered email ID for more
              details.
            </p>

            <p className="welcome">
              Welcome aboard, and happy investing!
            </p>

            <button className="login-btn">
              <a href="http://localhost:3000/" style={{ textDecoration: "none", color: "white", fontSize: "20px" }} to=""><img style={{ width: "20%", marginLeft: "20px" }} src="media\images\download.svg" />&nbsp;Login to Kite</a>
            </button>
          </div>

          <div className="hero-right">
            <img src="/media/images/person-CM-DzsTK.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;