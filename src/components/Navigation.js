import React, { useState } from "react";
import "./Navigation.css";
import logo from "./../images/logo.png";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }
  const menuItemsLeft = ["OVER", "BORRELPLANKEN", "TAARTEN"];
  const menuItemsRight = ["FOTO'S", "ERVARINGEN", "CONTACT"];
  const dropdownMenuItems = menuItemsLeft.concat(menuItemsRight);
  return (
    <>
      {showMenu ? (
        <div className="dropdown">
          {dropdownMenuItems.map((item, i) => {
            return (
              <NavLink
                onClick={() => toggleMenu()}
                to={`/${item.toLowerCase().replace("'", "")}`}
              >
                <div className="dropdown-item">
                  <li style={{ animationDelay: `${100 * i}ms` }} key={i}>
                    <span>{item}</span>
                  </li>
                </div>
              </NavLink>
            );
          })}
        </div>
      ) : (
        <></>
      )}

      <div className="fixed-nav-bar">
        <div id="menu" className="menu">
          <ul className="menu-items" id="menu-items-left">
            {menuItemsLeft.map((item, i) => {
              return (
                <div className="menu-item" key={i}>
                  <li key={i}>
                    <NavLink
                      activeStyle={{ borderBottom: "0.1em solid black" }}
                      exact
                      to={`/${item.toLowerCase()}`}
                    >
                      {item}
                    </NavLink>
                  </li>
                </div>
              );
            })}
          </ul>
          <NavLink
            className="sitename"
            to="/"
            onClick={() => setShowMenu(false)}
          >
            <img src={logo} alt="lemon logo" />
          </NavLink>
          <ul className="menu-items" id="menu-items-right">
            {menuItemsRight.map((item, i) => {
              return (
                <div className="menu-item" key={i}>
                  <li key={i}>
                    <NavLink
                      activeStyle={{ borderBottom: "0.1em solid black" }}
                      exact
                      to={`/${item.toLowerCase().replace("'", "")}`}
                    >
                      {item}
                    </NavLink>
                  </li>
                </div>
              );
            })}
          </ul>
          <div className="hamburger-icon">
            <p>MENU</p>
            <div className="hamburger-lemon" onClick={() => toggleMenu()}>
              <div className="bars">
                <div className="bar" id="bar1"></div>
                <div className="bar" id="bar2"></div>
                <div className="bar" id="bar3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
