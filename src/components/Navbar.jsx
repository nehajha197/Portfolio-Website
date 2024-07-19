import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../assets/assets/logo.svg";
import underline from "../assets/assets/nav_underline.svg";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../assets/assets/menu_open.svg'
import menu_close from '../assets/assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo"/>
      <img src={menu_open} onClick={openMenu} alt="Open menu" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="Close menu" className="nav-mob-close" />
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#home" onClick={closeMenu}>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="" /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about" onClick={closeMenu}>
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="" /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services" onClick={closeMenu}>
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? <img src={underline} alt="" /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work" onClick={closeMenu}>
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" ? <img src={underline} alt="" /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact" onClick={closeMenu}>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt="" /> : null}
        </li>
        <div className="nav-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact" onClick={closeMenu}>
            <p onClick={() => setMenu("contact")}>Connect with me</p>
          </AnchorLink>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
