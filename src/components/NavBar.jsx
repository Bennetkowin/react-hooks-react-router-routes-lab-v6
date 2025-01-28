import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "navbar active" : "navbar")}>
        Home
      </NavLink>
      <NavLink to="/actors" className={({ isActive }) => (isActive ? "navbar active" : "navbar")}>
        Actors
      </NavLink>
      <NavLink to="/directors" className={({ isActive }) => (isActive ? "navbar active" : "navbar")}>
        Directors
      </NavLink>
    </nav>
  );
}

export default NavBar;
