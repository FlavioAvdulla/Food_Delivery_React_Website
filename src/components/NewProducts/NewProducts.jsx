import React from "react";
import "./NewProducts.css";

const NewProducts = () => {
  return (
    <div className="newproducts-header">
      <h1>ORDER YOUR FAVOURITE FOOD</h1>
      <p className="newproducts-header-description">We bring to your table the best food, crafted with passion and precision, to turn every meal into an unforgettable experience.</p>
      <div className="newproducts-container">
        <div className="newproducts-part">
          <img src="src/assets/pizza.jpg" alt="newproducts-img" />
          <div className="newproducts-info">
            <h2>SUNSET MARGHERITA</h2>
            <p>
              is a classic blend of fresh tomatoes, mozzarella, and basil, all
              brought together by a rich, golden crust. It's a perfect
              combination of simplicity and flavor—like capturing the warmth and
              beauty of a sunset in every bite.
            </p>
            <button>
              <p>LEARN MORE!</p>
            </button>
          </div>
        </div>

        <div className="newproducts-part">
          <img src="src/assets/shrimp.jpg" alt="newproducts-img" />
          <div className="newproducts-info">
            <h2>COCONUT CURRY SHRIMP</h2>
            <p>
              It's a creamy and fragrant dish where shrimp is cooked in a
              luscious coconut curry sauce, infused with spices like turmeric,
              coriander, and a hint of lime. Serve it with jasmine rice or naan
              for a truly delightful meal.
            </p>
            <button>
              <p>LEARN MORE!</p>
            </button>
          </div>
        </div>

        <div className="newproducts-part">
          <img src="src/assets/chicken.jpg" alt="newproducts-img" />
          <div className="newproducts-info">
            <h2>CHICKEN MARSALA</h2>
            <p>
            This popular Italian-American dish features tender chicken breasts sautéed and then simmered in a rich sauce made with Marsala wine, mushrooms, and a touch of cream. It’s often served with pasta or mashed potatoes, making it a hearty and elegant choice for any dinner.
            </p>
            <button>
              <p>LEARN MORE!</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
