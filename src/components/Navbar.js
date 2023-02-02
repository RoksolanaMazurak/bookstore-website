import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src="../images/logo.svg" alt="logo" className="logo" />
      </div>
      <ul className="navbar__links">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/catalog">Catalog</a>
        </li>
        <li>
          <a href="/cart">Cart</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
