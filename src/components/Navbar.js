import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src="../images/logo.svg" alt="logo" className="logo" />
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
