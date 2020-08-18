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
        <div class="dropdown">
          {dropdownMenuItems.map((item, i) => {
            return (
              <li style={{ animationDelay: `${100 * i}ms` }} key={i}>
                <NavLink
                  onClick={() => toggleMenu()}
                  to={`/${item.toLowerCase().replace("'", "")}`}
                >
                  {item}
                </NavLink>
              </li>
            );
          })}
        </div>
      ) : (
        <></>
      )}

      <div class="fixed-nav-bar">
        <div id="menu" class="menu">
          <ul class="menu-items" id="menu-items-left">
            {menuItemsLeft.map((item) => {
              return (
                <li key={item}>
                  <NavLink to={`/${item.toLowerCase()}`}>{item}</NavLink>
                </li>
              );
            })}
          </ul>
          <NavLink class="sitename" to="/">
            <img src={logo} />
          </NavLink>
          <ul class="menu-items" id="menu-items-right">
            {menuItemsRight.map((item) => {
              return (
                <li key={item}>
                  <NavLink to={`/${item.toLowerCase().replace("'", "")}`}>
                    {item}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div class="hamburger-icon">
            <p>MENU</p>
            <div class="hamburger-lemon" onClick={() => toggleMenu()}>
              <div class="bars">
                <div class="bar" id="bar1"></div>
                <div class="bar" id="bar2"></div>
                <div class="bar" id="bar3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
