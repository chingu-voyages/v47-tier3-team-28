import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="" alt="" />
        <h1>NAME</h1>
      </div>

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="/courses">Courses</NavLink>
          </li>
          <li>
            <NavLink to="/team">Team</NavLink>
          </li>
        </ul>

        <div>
          <button>
            <NavLink to="/signup">Get Started</NavLink>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
