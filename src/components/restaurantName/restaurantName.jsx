import * as React from "react";
import './restaurantName.css';
const RestaurantName = (props) => {
  return (
    <div className={`restaurant-name ${props.className || ""}`}>
      <span className="klein-cafe">{props.kleinCafe || "Checkout"}</span>
    </div>
  );
};
export default RestaurantName;
