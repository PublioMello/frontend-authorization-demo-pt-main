import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import "./styles/NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Logo />
      </div>
      <ul className="navbar__nav">
        <li>
          <NavLink to="/ducks" className="navbar__link">
            Ducks
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-profile" className="navbar__link">
            Meu perfil
          </NavLink>
        </li>
        <li>
          <button className="navbar__link navbar__button">Sair</button>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
