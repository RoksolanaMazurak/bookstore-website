import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./CartItem.css";
import { cartActions } from "../redux/cartSlice";

function CartItem(props) {
  const items = useSelector((state) => state.cart.cart);
  const item = items[items.findIndex((item) => item.cartItem.id === props.id)];
  const [counter, setCounter] = useState(item.count);

  const dispatch = useDispatch();

  const increment = () => {
    setCounter(counter + 1);
    dispatch(cartActions.increaseCount({ id: props.id }));
  };

  const dencrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
      dispatch(cartActions.decreaseCount({ id: props.id }));
    } else {
      alert("Item quantity can't be less than 1");
    }
  };

  const deleteItem = () => {
    dispatch(cartActions.removeItem(props.id));
  };

  return (
    <>
      <div className="cart-item-container">
        <div className="cart-item-image-wrapper">
          <img src={props.image} className="cart-item-image" />
        </div>
        <div className="cart-item-wrapper">
          <div>
            <h3>{props.title}</h3>
            <p>{props.author}</p>
          </div>
          <div className="cart-counter">
            <button className="cart-counter-button" onClick={dencrement}>
              -
            </button>
            <h3>{counter}</h3>
            <button className="cart-counter-button" onClick={increment}>
              +
            </button>
          </div>

          <div>
            <h3>{props.price}$</h3>
          </div>
          <div>
            <button className="cart-item-delete" onClick={deleteItem}>
              <img src="../images/delete_icn.svg" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
