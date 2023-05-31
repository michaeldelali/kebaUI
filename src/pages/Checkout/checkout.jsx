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
import axios from "axios";

const Checkout = (props) => {
  const navigate = useNavigate();
  const {order,setOrder,note,setNote,total,addToOrder,removeFromOrder,processingFee,tip} = useContext(OrderContext);
  const {restaurant} = useContext(RestaurantContext);
  const [showLoading, setShowLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const MySwal = withReactContent(Swal)

// restaurantId:1
// branchId:1
// tableId:1
// userId:
// menuList:[{"fish":2},{"cow":4},{"pork":9}]
// total:100
// addons:[{"salad":2},{"egg":4}]
// note:Hello World
// paymentId:1
// paymentMode:MoMo
// status:pending

useEffect(() => {
  if(showLoading){
    MySwal.fire({
      title: 'Loading...',
      html: 'Please wait while we place your order',
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      }
    })
  } else {
    MySwal.close();
  }
}, [showLoading])

useEffect(() => {
    if(showError){
      MySwal.fire({
        title: 'Error',
        text: 'Something went wrong',
        icon: 'error',
        allowOutsideClick: false,
        confirmButtonText: 'Ok'
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          setShowError(false);
          MySwal.close();
        }
      })
    } else {
      setShowError(false);
      MySwal.close();
    }
}, [showError])

useEffect(() => {
  if(showSuccess){
    MySwal.fire({
      //add animation to sweetalert
      customClass: {
        popup: 'animated tada'
      },
      title: <p>Order Confirmed</p>,
      text: 'Your order has been placed successfully',
      icon: 'success',
      timer: 15000,
      timerProgressBar: true,
      showConfirmButton: false,
      showConfirmButton: 'OK'
    }).then(() => {
      setShowSuccess(false);
      navigate('/receipt');
    });
  }
}, [showSuccess])


  const formData = {
    restaurantId: restaurant.restaurantId,
    tableNumber: restaurant.tableNumber,
    userId: null,
    branchId: restaurant.branchId,
    menuList: order,
    total: total,
    addons: [],
    note: note,
    processingFee: 0, //convert percentage to decimal
    tip: 0, //convert percentage to decimal
    paymentId: 1,
    paymentMethod: "cash",
    paymentStatus: "pending",
    status: "pending",
  };
 
  //send order as props to receipt component on button click
  const submitOrder = () => {
    setOrder(order.filter(item => item.count !== 0));
    console.log("Order To send to backend::",formData)
    
    if(order.length <= 0) {
      MySwal.fire({
        title: <p>Empty Order</p>,
        text: 'Please add some items to your order',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    } else {
      setShowLoading(true);
      //send order to backend with axios
      axios.post('https://app.mykeba.com/api/customer/createOrder', formData)
      .then(res => {
        console.log("Order Noe on Confirm::",res.data)
        setShowLoading(false);
        setShowSuccess(true)
      })
      .catch(err => {
        console.log(err)
        setShowLoading(false);
        setShowError(true);
      })
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
          <span className="table-number-8">Table {restaurant.tableNumber}</span>
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
      <div className="frame-44 custom-dropdown">
      <img className="pay" src={pay} alt='pay'/>
          <select>
            {(restaurant.paymentMethods).map((method)=>{
                    return <option>{method}</option>
            })}
          </select>
      </div>

        <button className="btn btn-lg rounded-0 text-white frame-33 py-3" onClick={()=>submitOrder()} >
          <span>Place Order</span>
          <span>₵{total.toFixed(2)}
          </span>
        </button>
      </div>
    </div>
  );
};
export default Checkout;
