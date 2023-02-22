import CartItem from "../components/CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  const items = useSelector((state) => state.cart.cart);

  let totalPrice = 0;
  for (const foundItem of items) {
    totalPrice += foundItem.cartItem.price * foundItem.count;
  }

  return (
    <div className="cart-container">
      <h1>Shopping cart</h1>
      {items.map(({ cartItem, count }) => (
        <CartItem
          title={cartItem.title}
          author={cartItem.author}
          image={cartItem.image}
          price={cartItem.price}
          id={cartItem.id}
          key={cartItem.id}
        />
      ))}

      <div className="cart-total-price">
        <h3>
          Total price: <strong>{totalPrice}</strong> $
        </h3>
      </div>
      <div className="cart-action-button">
        <Link to="/catalog">
          <button>Go back</button>
        </Link>
        <button>Continue</button>
      </div>
    </div>
  );
}

export default Cart;
