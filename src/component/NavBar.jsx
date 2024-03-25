import React from "react";
import Switch from "./Switch";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between px-10 py-5">
      <div  className="flex gap-5 items-center">
        <span className="text-2xl text-sky-600 font-semibold">TextUtils</span>
        <span><NavLink to="/">Home</NavLink></span>
        <span><NavLink to="/about">About Us</NavLink></span>
        <span><NavLink to="/contact">Contact</NavLink></span>
      </div>
      <div className="flex gap-5 items-center">
        <span><Switch ></Switch></span>
        <span>Enable dark Mode</span>
      </div>
    </div>
  );
};

export default NavBar;
