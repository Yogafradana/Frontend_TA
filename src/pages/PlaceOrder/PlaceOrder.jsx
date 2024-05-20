import React , {useContext} from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";


const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Deleveri Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="first Name" />
          <input type="text" placeholder="Lastname" />
        </div>
        <input type="text" placeholder="email address" />
        <input type="text" placeholder="street" />
        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
          <input type="text" placeholder="phone" />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p> Delevery fee</p>
                <p>${2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${}</b>
              </div>
            </div>
            <button>Checkout</button>
          </div>
      
      </div>
    </form>
  );
};

export default PlaceOrder;
