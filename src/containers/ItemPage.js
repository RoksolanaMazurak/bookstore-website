import React, { useState, useEffect } from "react";
import "./ItemPage.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/cartSlice";
import { Link, useParams } from "react-router-dom";
import { getItemById } from "../api/api";
import Loader from "../components/Loader";

function ItemPage() {
  const [item, setItem] = useState([]);
  const { id } = useParams();
  const [loader, setLoader] = useState(true);
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    getItemById(id).then((res) => {
      setItem(res);
      setLoader(false);
    });
  }, [id]);

  const addItemHandler = () => {
    if (count >= 1) {
      dispatch(cartActions.addToCart({ cartItem: item, count: count }));
    } else {
      alert("Item quantity can`t be 0 or less");
    }
  };

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
            value={count}
            onChange={(event) => {
              setCount(event.target.value);
            }}
          ></input>
          <select className="item-select">
            <option value="0">Special bookmark</option>
            <option value="1">Add bookmark</option>
            <option value="2">None</option>
          </select>
          <div className="price-wrapper">
            <h2>Price: {item.price} $</h2>
            <div className="item-buttons">
              <Link to="/catalog">
                <button className="item-button">Go back</button>
              </Link>
              <button
                disabled={item.availability === "not available" ? true : false}
                className="item-add-button"
                onClick={addItemHandler}
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
