import React, {useState,useEffect,useContext} from "react";
import { useNavigate } from "react-router-dom";
//import checkout css
import './checkout.css'
//import all images form copy folder in assets
import table from '../../assets/copy/table.png'
import leftArrow from '../../assets/copy/leftArrow.png'
import pay from '../../assets/copy/pay.png'
import forward from '../../assets/copy/forward.png'
import RestaurantName from '../../components/restaurantName/restaurantName'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { OrderContext } from '../../context/OrderContextProvider';
import { RestaurantContext } from "../../context/RestaurantContextProvider";

const Checkout = (props) => {
  const navigate = useNavigate();
  const {order,setOrder,note,setNote,total,addToOrder,removeFromOrder} = useContext(OrderContext);
  const {restaurant} = useContext(RestaurantContext);
 
  //send order as props to receipt component on button click
  const submitOrder = () => {
    setOrder(order.filter(item => item.count !== 0));
    const MySwal = withReactContent(Swal)
    if(order.length <= 0) {
      MySwal.fire({
        title: <p>Empty Order</p>,
        text: 'Please add some items to your order',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    } else {
      // show success message with sweetalert animation and navigate to receipt page after 2 seconds
      MySwal.fire({
        //add animation to sweetalert
        customClass: {
          popup: 'animated tada'
        },
        title: <p>Order Confirmed</p>,
        text: 'Your order is on its way',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        navigate('/receipt');
      });
    }
  }

  // Implement a function to go back to the previous page
  const goBack = () => {
    window.history.back();
    };

  //define props data for restaurantName component
  const propsData = {
    restaurantName: {
      kleinCafe: "Checkout",
    },
  };

  return (
      <div className="checkout">
      <div className="sticky-top mb-3 details">
        <img className="left-arrow" onClick={()=>goBack()} src={leftArrow} alt='arrow'/>
        <RestaurantName
          className="restaurant-name-instance-1"
          {...propsData.restaurantName}
        />
        <span className="num-7-th-sandwich-stre mb-4">
          <p style={{margin:'0'}}>{restaurant.address} </p>
          <p style={{margin:'0'}}>{restaurant.openDays}</p>
          <p style={{margin:'0'}}>({restaurant.openTime}-Open Till {restaurant.closeTime})</p>
        </span>

        <button className="frame-42 d-flex">
          <img className="table" src={table} alt='table'/>
          <span className="table-number-8">Table 8</span>
        </button>
      </div>
      {console.log("ORDER IN CONFIRM",order)}
      <div className="ordered-list">
        {order.map((item) => {
        const {id,name,price,count} = item;
        return <div className="order-list" key={id}>
            <div className="frame-36">
              <span className="shrimps-free-coke">{name}</span>
              <div className="flex-container">
                <span>₵{price}</span>
                <div className="flex-container-1">
                  <button className="btn"  onClick={() => removeFromOrder({name})}>
                    <FontAwesomeIcon icon="fa-solid fa-square-minus" size='2x' color="#ce5252"/>
                  </button>
                  <span className="dbugtvyudqsgq">{count}</span>
                  <button className="btn"  onClick={() => addToOrder({name,price})} >
                    <FontAwesomeIcon icon="fa-solid fa-square-plus " size='2x'/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        })}
      </div>
      <div className="fixed-bottom mt-5 checkout-bottom ">
        <input type='text' placeholder="Leave a note for the kitchen" value={note} onChange={e => setNote(e.target.value)} />
      {/* <div className="frame-44">
            <img className="pay" src={pay} alt='pay'/>
          <span>MoMo</span>
          <img className="forward" src={forward} alt='forward'/>
        </div> */}

      <div className="frame-44 custom-dropdown">
      <img className="pay" src={pay} alt='pay'/>
          <select>
            {(restaurant.paymentMethods).map((method)=>{
                    return <option>{method}</option>
            })}
          </select>
      </div>

        <button className="btn btn-lg rounded-0 text-white frame-33" onClick={()=>submitOrder()} >
          <span>Place Order</span>
          <span>₵{total.toFixed(2)}
          </span>
        </button>
      </div>
    </div>
  );
};
export default Checkout;
