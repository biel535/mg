import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes, FaHandHolding } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
    <IconContext.Provider value={{ color:  "#79afd6" }}>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <FaHandHolding className="navbar-icon" color="#79afd6" />
            NeuroWyspa
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                O mnie
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Kontakt
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                BLOG
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/appointments"
                className={({ isActive }) =>
                  "nav-links1" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Umów wizytę
              </NavLink>
            </li>
           
          </ul>
        </div>
      </nav>
    </IconContext.Provider>
  </>
  )
}

export default Navbar
