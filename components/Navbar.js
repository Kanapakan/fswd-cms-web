import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { BiRun, BiCategoryAlt } from "react-icons/bi";
import { FaHashtag } from "react-icons/fa";
import { MdCategory } from "react-icons/md";


const Navbar = () => {
  const [click, setClick] = useState(false);
  const [clickTag, setClickTag] = useState(false);
  const handleClick = () => {
    if(clickTag == true) {
      setClickTag(!clickTag)
    }
    setClick(!click)
    // setClickTag(!clickTag)
  }
  const closeMobileMenu = () => {
    if(clickTag == true) {
      setClickTag(!clickTag)
  }
    setClick(false);
    
    
  }

  const onClickTag = () => {
  setClickTag(!clickTag)

}
  const closeALl = () => {
    setClickTag(!clickTag)
    setClick(!click)
  }



  const tagCard = () => {
    return (
      <div className="tag-menu">
        <div className="tag-con">
          <div className="left-category">
            <h2><MdCategory style={{ paddingTop: "5px" }}/> Categories</h2>
              <Link href="/category/Category"><a onClick={closeALl}><p className="cate-text">Category</p></a></Link>
              <Link href="/category/Classic"><a onClick={closeALl}><p className="cate-text">Classic</p></a></Link>
              <Link href="/category/Life"><a onClick={closeALl}><p className="cate-text">Life</p></a></Link>
              <Link href="/category/Runner"><a onClick={closeALl}><p className="cate-text">Runner</p></a></Link>
              <Link href="/category/Style"><a onClick={closeALl}><p className="cate-text">Style</p></a></Link>
              <Link href="/category/Uncategorized"><a onClick={closeALl}><p className="cate-text">Uncategorized</p></a></Link>


          </div>
          <div className="right-tag">
            <h2><FaHashtag style={{ paddingTop: "5px" }}/>Tags</h2>
            <Link href="/tags/brooklyn"><a onClick={closeALl}><p className="cate-text">brooklyn</p></a></Link>
            <Link href="/tags/fashion"><a onClick={closeALl}><p className="cate-text">fashion</p></a></Link>
            <Link href="/tags/women"><a onClick={closeALl}><p className="cate-text">women</p></a></Link>
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
                <a className="nav-item"><p className="nav-text">Home</p></a>
              </Link>
            </li>
            <li className="menu-link" onClick={closeMobileMenu}>
              <Link href="/posts">
                <a className="nav-item"><p className="nav-text">Posts</p></a>
              </Link>
            </li>
            <li className="menu-link" onClick={onClickTag} style={{cursor: "pointer"}}>
              <a className="nav-item">
              <p className="nav-text">Category/Tags
                {clickTag ? (
                  <AiFillCaretUp style={{ paddingTop: "4px" }} />
                ) : (
                  <AiFillCaretDown style={{ paddingTop: "4px" }} />
                )}
                </p>
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
