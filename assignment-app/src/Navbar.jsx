import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to="/" end className={({ isActive }) => "nav-link" + (isActive ? " active fw-bold" : "")}>
              User Behavior Data
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/search" className={({ isActive }) => "nav-link" + (isActive ? " active fw-bold" : "")}>
              Search Through Dataset
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
