import search_icon from "../images/search_icon.svg";
import "./Input.css";

function Input() {
  return (
    <>
      <input
        className="input"
        type="text"
        placeholder="Search for dream book"
      />
      <button id="search_button">
        <img src={search_icon} alt="Search" />
      </button>
    </>
  );
}

export default Input;
