import React, { useState, useEffect } from "react";
import "./ItemPage.css";
import { useParams } from "react-router-dom";
import { getItemById } from "../api/api";
import Loader from "../components/Loader";

function ItemPage() {
  const [item, setItem] = useState([]);
  const { id } = useParams();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getItemById(id).then((res) => {
      setItem(res);
      setLoader(false);
    });
  }, [id]);

  return (
    <>
      {loader && <Loader />}
      <div className="item-container">
        <div
          className="item-image-container"
          style={{ display: !loader ? "block" : "none" }}
        >
          <img src={item.image} alt="Book cover" className="item-image" />
        </div>
        <div style={{ display: !loader ? "block" : "none" }}>
          <div className="tag-wrapper">
            <div className="tag-avaible">{item.availability}</div>
            <div className="tag-genre">{item.genre}</div>
          </div>
          <h1 className="item-title">{item.title}</h1>
          <h3>by {item.author}</h3>
          <p className="item-paragraph">{item.description}</p>
          <input
            className="item-quantity-input"
            placeholder="Enter quantity"
            type="number"
            min="1"
          ></input>
          <select className="item-select">
            <option value="0">Special bookmark</option>
            <option value="1">Add bookmark</option>
            <option value="2">None</option>
          </select>
          <div className="price-wrapper">
            <h2>Price: {item.price} $</h2>
            <div className="item-buttons">
              <button className="item-button">Go back</button>
              <button
                disabled={item.availability === "not available" ? true : false}
                className="item-add-button"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ItemPage;
