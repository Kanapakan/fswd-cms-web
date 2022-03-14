import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
// import styles from '../components/Navbar.module.css'
import Link from "next/link";
import Button from "@mui/material/Button";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  console.log(click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="navbar">
      <div className="container-nav">
        <div className="navbar-con">
          <div className="logo-container">
            <Link href="/home">
              <a className="nav-item is-tab is-hidden-mobile">CMS Web</a>
            </Link>
          </div>
          <ul className={click ? "menu active" : "menu"}>
            <li className="menu-link" onClick={closeMobileMenu}>
              <Link href="/home">
                <a>HOME</a>
              </Link>
            </li>
            <li className="menu-link" onClick={closeMobileMenu}>
              <Link href="/posts">
                <a className="nav-item-post">POSTS</a>
              </Link>
            </li>
            <li className="menu-link" onClick={closeMobileMenu}>
              <Link href="/category">
                <a className="nav-item-category">CATEGORY</a>
              </Link>
            </li>
          </ul>
          <div className="mobile-menu" onClick={handleClick}>
            {click ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
