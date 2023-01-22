import logo from "../images/logo.svg";
import "./Navbar.css";
import Input from "./Input";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <ul className="navbar__links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Catalog</a>
        </li>
        <li>
          <a href="#">Cart</a>
        </li>
      </ul>
      <Input />
    </div>
  );
}

export default Navbar;
