import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
// import styles from '../components/Navbar.module.css'
import Link from "next/link";
import Button from "@mui/material/Button";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { BiRun } from "react-icons/bi";


const Navbar = () => {
  const [click, setClick] = useState(false);
  const [clickTag, setClickTag] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const onClickTag = () => setClickTag(!clickTag);



  const tagCard = () => {
    return (
      <div className="tag-menu">
        <div className="tag-con">
          <div className="left-category">
            <h2>Categories</h2>
              <Link href="/category/Category"><a onClick={onClickTag}><p>Category</p></a></Link>
              <Link href="/category/Classic"><a onClick={onClickTag}><p>Classic</p></a></Link>
              <Link href="/category/Life"><a onClick={onClickTag}><p>Life</p></a></Link>
              <Link href="/category/Runner"><a onClick={onClickTag}><p><BiRun/>Runner</p></a></Link>
              <Link href="/category/Style"><a onClick={onClickTag}><p>Style</p></a></Link>
              <Link href="/category/Uncategorized"><a onClick={onClickTag}><p>Uncategorized</p></a></Link>


          </div>
          <div className="right-tag">
            <h2>Tags</h2>
            <p>brooklyn</p>
            <p>fashion</p>
            <p>women</p>
          </div>
        </div>
      </div>
    );
  };

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
                <a className="nav-item-post">Posts</a>
              </Link>
            </li>
            <li className="menu-link" onClick={onClickTag}>
              <a className="nav-item-category">
                Category/Tag
                {clickTag ? (
                  <AiFillCaretUp style={{ paddingTop: "4px" }} />
                ) : (
                  <AiFillCaretDown style={{ paddingTop: "4px" }} />
                )}
              </a>
            </li>
          </ul>
          <div className="mobile-menu" onClick={handleClick}>
            {click ? <FiX /> : <FiMenu />}
          </div>
        </div>
        {clickTag ? tagCard() : null}
      </div>
    </div>
  );
};
export default Navbar;
