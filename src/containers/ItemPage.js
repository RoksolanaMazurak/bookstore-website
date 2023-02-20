import React, { useState } from "react";
import { useParams } from "react-router-dom";
import books from "./books";
import "./ItemPage.css";

function ItemPage() {
  const [items, setItems] = useState(books);
  const { id } = useParams();
  const item = items.find((item) => item.id == id);

  return (
    <div className="item-container">
      <div className="item-image-container">
        <img src={item.image} alt="Book cover" className="item-image" />
      </div>
      <div>
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
            <button className="item-button">
              <a href="/catalog">Go back</a>
            </button>
            <button className="item-add-button">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ItemPage;
