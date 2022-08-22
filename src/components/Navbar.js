import React from "react";
import NavbarLogo from "../assets/navbar-logo.svg";
import "../assets/style/navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={NavbarLogo} alt="" />
        <h1 className="navbar-logo-h1">Jadwalin</h1>
      </div>
      <div className="navbar-btn">
        <button className="btn">Вход</button>
        <button className="btn">Регистрация</button>
      </div>
    </div>
  );
};
export default Navbar;
