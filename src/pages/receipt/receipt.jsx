import React, {useState,useEffect,useContext} from "react";
import "./receipt.css";
import leftArrow from "../../assets/copy/leftArrow.png";
import done from "../../assets/copy/done.png";
import table from "../../assets/copy/table.png";
import fullShoppingBasket from "../../assets/copy/fullShoppingBasket.png";
import { OrderContext } from "../../context/OrderContextProvider";
const Receipt = (props) => {

  const {order, processingFee, tip, totalAmount} = useContext(OrderContext);


  return (
    <div className="receipt">
      {/* <img className="left-arrow mb-4" src={leftArrow} alt={"left arrow"}/> */}

      <div className="frame-48 sticky-top py-3 mb-4">
        <span className="order-has-been-place">Order has been placed</span>
        <img className="done" src={done} alt={"done"}/>
      </div>
    <div className="container receipt-body">
      <div className="flex-container mb-3">
        <img className="table" src={table} alt={"table"} />
        <span className="mx-2">Food ordered on table 8 at Piz Cafea </span>
      </div>

      <div className="flex-container-1 mb-3">
        <img className="full-shopping-basket" src={fullShoppingBasket} alt={"basket"} />
        <span className="mx-2">Order Number #023003093</span>
      </div>

      {order.map((item) => {
        return (
          <div className="flex-container-2" key={item.id} >
            <span className="shrimps-free-coke">{item.name}</span>
            <span className="num-1000">{
              parseFloat(item.price * item.count).toFixed(2)
            }</span>
          </div>
        );
      })}-
   
      <div className="flex-container-4">
        <span className="spaghetti-puttanesca">Tip ({5}%)</span>
        <span className="num-1000">₵{tip}</span>
      </div>
      
      
      <div className="flex-container-5">
        <span className="spaghetti-puttanesca">Processing Fee</span>
        <span className="num-1000">₵{processingFee}</span>
      </div>
    </div>
      <div className="frame-33 fixed-bottom">
        <span>Total</span>
        <span>₵{totalAmount}
        </span>
      </div>

    </div>
  );
};
export default Receipt;