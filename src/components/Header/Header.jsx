import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="header-contents">
        <h2>ORDER YOUR FAVOURITE FOOD</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic
        </p>
        <button>VIEW MENU</button>
      </div>
      <img className="header_img" src="/header_img.png" alt="" />
    </div>
  );
};

export default Header;
