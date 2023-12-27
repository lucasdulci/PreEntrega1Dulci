import { CartWidget } from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { MagicTabSelect } from "react-magic-motion";

import "./NavBar.css";

export const NavBar = () => {
  return (
    <div id="navbar">
      <Link to="/" className="brand">
        <img src="/img/logo/logo-white.png" alt="logotipo" />
      </Link>
      <ul>
        <li>
          <Link to="/categorias/sony">Sony</Link>
        </li>
        <li>
          <Link to="/categorias/microsoft">Microsoft</Link>
        </li>
        <li>
          <Link to="/categorias/nintendo">Nintendo</Link>
        </li>
      </ul>

      <CartWidget />
    </div>
  );
};

