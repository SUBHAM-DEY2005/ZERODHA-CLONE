import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import MegaMenu from './MegaMenu';
import { useEffect, useRef } from "react";
import ReactDOM from 'react-dom';

function Navbar() {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);


    return (
        <nav className="navbar navbar-expand-lg border-bottom sticky-top" style={{ backgroundColor: "#fff", height: "70px"}}>
            <div className="container p-2">
                <Link className="navbar-brand" to="/">
                    <img src='/media/images/logo.svg' alt='logo' style={{ width: "20%", marginLeft: "80px" }} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <form className="d-flex" role="search">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/Signup">Signup</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/product">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/pricing">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/support">Support</Link>
                            </li>
                            <li className="nav-item" style={{marginLeft:"20px", marginTop:"5px"}}>
                                <div className="ms-3" style={{ cursor: "pointer", fontSize: "1.2rem" }} onClick={() => setOpen(!open)}>
                                    <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'}`} style={{ color: "#444" }}></i>
                                </div>
                            </li>
                        </ul>
                    </form>
                </div>
            </div >

            {/* THE PORTAL OPTION */}
            {open && ReactDOM.createPortal(
                <div className="mega-menu-portal-wrapper">
                    <MegaMenu />
                </div>,
                document.body // This renders the menu at the very end of <body>
            )}
        </nav >
    );
}

export default Navbar;