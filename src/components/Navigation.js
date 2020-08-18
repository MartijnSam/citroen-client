import React from "react";
import "./Navigation.css";
import logo from "./../images/logo.png";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav class="fixed-nav-bar">
      <div id="menu" class="menu">
        <a class="show" href="#menu">
          Menu
        </a>
        <a class="hide" href="#hidemenu">
          Menu
        </a>
        <ul class="menu-items-left">
          <li>
            <NavLink to="/over">OVER</NavLink>
          </li>
          <li>
            <NavLink to="/borrelplanken">BORRELPLANKEN</NavLink>
          </li>
          <li>
            <NavLink to="/taarten">TAARTEN</NavLink>
          </li>
        </ul>
        <NavLink class="sitename" to="/">
          <img src={logo} />
        </NavLink>
        <ul class="menu-items-right">
          <li>
            <NavLink to="/fotos">FOTO'S</NavLink>
          </li>
          <li>
            <NavLink to="/ervaringen">ERVARINGEN</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
