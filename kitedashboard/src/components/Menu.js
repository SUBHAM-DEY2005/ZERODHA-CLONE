import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BasketModal from "./BasketModal"; 
import ProfileDropdown from "./ProfileDropdown";
import './css/Menu.css'

const Menu = ({ onLogout }) => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [userData, setUserData] = useState({ name: "", initials: ".." });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("https://zerodha-backend-mtpe.onrender.com/univers", {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          const initials = data.name 
            ? data.name.split(" ").map(n => n[0]).join("").toUpperCase() 
            : "U";
          
          setUserData({ name: data.name, initials });
        }
      } catch (err) {
        console.error("Error fetching menu user data:", err);
      }
    };

    fetchUser();
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "25px" }} alt="logo" />
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/bids" onClick={() => handleMenuClick(6)}>
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>Bids</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds" onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
        </ul>
        <hr />
        
        <div className="profile" onClick={handleProfileClick}>
          <div style={{ marginBottom: "7px", marginRight: "18px" }}>
            
            <i 
              className="fa-solid fa-cart-arrow-down" 
              style={{ marginRight: "15px", cursor: "pointer" }}
              title="Basket"
              onClick={(e) => {
                e.stopPropagation(); 
                setIsBasketOpen(true);
              }}
            ></i>

            <i className="fa-regular fa-bell" style={{ cursor: "pointer" }}></i>
          </div>

          <div style={{width:"25px", height:"25px", marginTop:"14px"}} className="avatar" onClick={handleProfileClick}>{userData.initials}</div>
          <p className="username" style={{marginTop:"10px"}} onClick={handleProfileClick}>{userData.name.split(" ")[0]}</p>
          <ProfileDropdown isOpen={isProfileDropdownOpen} onLogout={onLogout}/>
        </div>
      </div>

      <BasketModal 
        isOpen={isBasketOpen} 
        onClose={() => setIsBasketOpen(false)} 
      />
    </div>
  );
};

export default Menu;