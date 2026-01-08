import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div class="nav w-full flex gap-10 bg-blue-500 p-4 text-white justify-end ">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
}

export default NavBar;
