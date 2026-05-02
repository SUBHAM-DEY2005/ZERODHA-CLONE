import React, { useState, useEffect } from "react"; 
import "./css/ProfileDropdown.css";
import SettingsOutlined from '@mui/icons-material/SettingsOutlined';
import FiberManualRecord from '@mui/icons-material/FiberManualRecord';
import HelpOutline from '@mui/icons-material/HelpOutlineOutlined';
import PersonAddOutlined from '@mui/icons-material/PersonAddOutlined';
import KeyboardCommandKey from '@mui/icons-material/KeyboardCommandKey';
import LogoutOutlined from '@mui/icons-material/LogoutOutlined';
import EditOutlined from '@mui/icons-material/EditOutlined';

const ProfileDropdown = ({ isOpen, onLogout }) => {
  const [user, setUser] = useState({ name: "Loading...", email: "" });

  useEffect(() => {
    const fetchUserData = async () => {
      if (!isOpen) return;

      try {
        const token = localStorage.getItem("token"); 
        const response = await fetch("http://localhost:8080/univers", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`, 
            "Content-Type": "application/json"
          },
        });

        if (response.status === 401) {
          onLogout(); 
          return;
        }

        if (response.ok) {
          const data = await response.json();
          setUser({
            name: data.name, 
            email: data.email
          });
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error connecting to backend:", error);
      }
    };

    fetchUserData();
  }, [isOpen, onLogout]); 

  if (!isOpen) return null;

  return (
    <div className="profile-dropdown-menu">
      <div className="dropdown-header">
        <div className="user-info">
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>
        <EditOutlined className="edit-icon" />
      </div>

      <hr />

      <div className="dropdown-section">
        <div className="toggle-item">
          <span>Privacy mode</span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="toggle-item">
          <span>Theme (Light)</span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      <hr />

      <div className="dropdown-links">
        <div className="link-item"><FiberManualRecord className="icon-dot" /> Console</div>
        <div className="link-item"><FiberManualRecord className="icon-dot" /> Coin</div>
        <div className="link-item"><SettingsOutlined className="icon" /> Support</div>
        <div className="link-item"><PersonAddOutlined className="icon" /> Invite friends</div>
      </div>

      <hr />

      <div className="dropdown-links secondary">
        <div className="link-item"><KeyboardCommandKey className="icon" /> Keyboard shortcuts</div>
        <div className="link-item"><HelpOutline className="icon" /> User manual</div>
        <div className="link-item" onClick={onLogout} style={{ cursor: 'pointer' }}>
          <LogoutOutlined className="icon" /> Logout
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;