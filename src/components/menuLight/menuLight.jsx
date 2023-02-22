import * as React from "react";
import "./App.css";
import frame1 from "./assets/frame1.svg";
import shoppingCart from "./assets/shoppingCart.png";
import leftArrow from "./assets/leftArrow.png";
import Frame22 from "./components/Frame22";
import RestaurantName from "./components/RestaurantName";
const App = () => {
  const propsData = {
    restaurantName: {
      kleinCafe: "Klein Cafe",
    },
    frame22: {
      getYourFreeShrimp:
        "Get your free shrimps and  coke here on demand hahaha anytime",
      num10: "₵10",
      shrimpsFreeCoke: "Shrimps + Free Coke",
      zwetgdjrwpnsa: "1",
    },
    frame23: {
      zwetgdjrwpnsa: "1",
      shrimpsFreeCoke: "Spaghetti puttanesca",
      getYourFreeShrimp:
        "Get your free shrimps and  coke here on demand hahaha anytime",
      num10: "₵30",
    },
    frame24: {
      num10: "₵20",
      shrimpsFreeCoke: "Meat Burger",
      getYourFreeShrimp:
        "Get your free shrimps and  coke here on demand hahaha anytime",
      zwetgdjrwpnsa: "0",
    },
    frame25: {
      zwetgdjrwpnsa: "0",
      shrimpsFreeCoke: "Shrimps + Free Coke",
      num10: "₵10",
      getYourFreeShrimp:
        "Get your free shrimps and  coke here on demand hahaha anytime",
    },
  };
  return (
    <div className="i-phone-13-pro-max">
      <img className="left-arrow" src={leftArrow} />
      <RestaurantName
        className="restaurant-name-instance-1"
        {...propsData.restaurantName}
      />
      <span className="num-7-th-sandwich-stre">
        7th Sandwich Street, Accra Mon-Fri (8:30-Open Till 8:00pm)
      </span>
      <div className="flex-container">
        <span>Lunch deal</span>
        <span>Salads</span>
        <span className="pizza">Pizza</span>
        <span>Sides</span>
        <span>Soft drinks</span>
      </div>
      <img className="frame-1" src={frame1} />
      <Frame22 className="frame-22-instance-1" {...propsData.frame22} />
      <Frame22 className="frame-23-instance" {...propsData.frame23} />
      <Frame22 className="frame-24-instance" {...propsData.frame24} />
      <div className="flex-container-1">
        <Frame22 className="frame-25-instance" {...propsData.frame25} />
        <div className="cat-absolute-container">
          <div className="frame-32">
            <img className="shopping-cart" src={shoppingCart} />
            <span className="checkout">Checkout</span>
            <span className="num-4000">$40.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
