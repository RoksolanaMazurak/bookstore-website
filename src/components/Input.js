import React, { useState } from "react";
import "./Input.css";

function Input(props) {
  const [searchText, setSearchText] = useState("");

  const searchTextHandler = (event) => {
    setSearchText(event.target.value);
  };

  const onSubmitSearchButton = () => {
    props.onChangeInput(searchText);
  };

  const onSubmitCancelButton = () => {
    setSearchText("");
    props.onChangeInput(searchText);
  };

  return (
    <>
      <input
        className="input"
        type="text"
        placeholder="Search for dream book"
        onChange={searchTextHandler}
        value={searchText}
      />
      <button id="search_button" onClick={onSubmitSearchButton}>
        <img src="../images/search_icon.svg" alt="Search" />
      </button>
      <button id="cancel_button" onClick={onSubmitCancelButton}>
        <img src="../images/cross.svg" alt="Cancel" />
      </button>
    </>
  );
}

export default Input;
