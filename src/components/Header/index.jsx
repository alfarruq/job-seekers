import { NavLink } from "react-router-dom";

import './header.css'

function Header() {
  return (
    <header className="container">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/clieants"}>Client</NavLink>
      <NavLink to={"/community"}>Community</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/findJob"}>Find Job</NavLink>
      <NavLink to={"/signin"}>Blog</NavLink>
    </header>
  );
}

export default Header;
