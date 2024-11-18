import React, { useContext, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="Add"
          />
        ) : (
          <div className="food-item-counter">
            <i
              onClick={() => removeFromCart(id)}
              className="fa-solid fa-circle-minus"
            ></i>
            <p>{cartItems[id]}</p>
            <i
              onClick={() => addToCart(id)}
              className="fa-solid fa-circle-plus"
            ></i>
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-desc">
          {showMore ? description : `${description.substring(0, 50)}...`}
        </p>
        <button className="show-more-btn" onClick={toggleShowMore}>
          {showMore ? "Show Less" : "Show More"}
        </button>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
