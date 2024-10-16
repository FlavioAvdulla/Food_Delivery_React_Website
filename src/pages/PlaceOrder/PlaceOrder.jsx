import React from "react";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name"/>
          <input type="text" placeholder="Last name"/>
        </div>
        <input type="email" placeholder="Email address"/>
        <input type="text" placeholder="Street"/>
      </div>
      <div className="place-order-right">

      </div>
    </form>
  )
};

export default PlaceOrder;
