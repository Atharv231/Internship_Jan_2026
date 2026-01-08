import React from "react";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="nav w-full flex gap-10 bg-blue-500 p-4 text-white justify-end ">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">About</NavLink>
      <Link to="/Todo">Todo List</Link>
      <NavLink to="/">Contact</NavLink>
    </div>
  );
}

export default Navbar;
