import React, {useState,useContext } from 'react';
import { Link,useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { OrderContext } from '../context/OrderContextProvider';


const Menu = ({items}) => {

  const navigate = useNavigate();
  const {order,setOrder,addToOrder,removeFromOrder,total} = useContext(OrderContext);
  const [darkTheme,setDarkTheme] = useState(false);

    //Check if there is order on click submit button if not show sweetalert2 message else redirect to confirm page
    const checkOrder = () => {
      setOrder(order.filter(item => item.count !== 0));
      if(order.length <= 0) {
        const MySwal = withReactContent(Swal)
        MySwal.fire({
          title: <p>Empty Order</p>,
          text: 'Please add some items to your order',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      } else {
        navigate('/checkout');
      }
    }


  return (    
    <div className = 'row menu-content' >
      {
        darkTheme?
         items.map((item) => {

            // dynamically import images from assets folder with vitejs and react


            const {id,name,img,price,desc} = item;
            const count = order.find(item => item.name === name)?.count || 0; 
            const imgPath = new URL(`../assets/images/${img}.jpeg`, import.meta.url)
            // const imgPath = import(`../assets/images/item-1.jpeg`);
            return <div key={id} className="col-sm-6 col-md-6 col-lg-4">
            <div className="food-card rounded-lg overflow-hidden mb-5 shadow">
              <div className="food-card_img position-relative">
              <img src={imgPath} alt={name} className ='photo'/>
              </div>
              <div className="food-card_content">
                <div className="food-card_title-section overflow-hidden">
                  <h3 className="food-card_title">{name}</h3>
                  <div className="d-flex justify-content-between">
                      <p>
                          {desc}
                      </p>
                    </div>
                </div>
                <div className="food-card_bottom-section">
                  <hr></hr>
                  <div className="d-flex justify-content-between">
                    <div className="food-card_price">
                      <span>₵{price}</span>
                    </div>
                    <div className="food-card_order-count">
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <button className="btn btn-outline-secondary minus-btn text-white rounded-0" type="button" id="button-addon1" onClick={() => removeFromOrder({name})}><FontAwesomeIcon icon="fa-solid fa-minus" /></button>
                        </div>
                        <input type="text" className="form-control input-manulator" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" defaultValue={0} value={count}/>
                        <div className="input-group-append ">
                          <button className="btn btn-outline-secondary add-btn text-white rounded-0" type="button" id="button-addon1" onClick={() => addToOrder({name,price})} > <FontAwesomeIcon icon="fa-solid fa-plus" /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      }):
        items.map((item) => {
          const {id,name,img,price,desc} = item;
          const count = order.find(item => item.name === name)?.count || 0; 
          const imgPath = new URL(`../assets/images/${img}.jpeg`, import.meta.url)
          // const imgPath = import(`../assets/images/${img}.jpeg`);
          return <div key={id} className="menu_card">
          <div className="food_img">
          <img src={imgPath} alt=""/>
            </div>
            <div className="food_details">
                <div className="food_name"><h2>{name}</h2></div>
                <div className="food_desc"><p>{desc}</p></div>
                <div className="food_price_count">
                    <div className="price">
                        <p className="price_value">₵{price}</p>
                    </div>
                    <div className="count">
                      <button className="btn btn-outline-danger minus-btn text-white rounded-2" type="button" id="button-addon1" onClick={() => removeFromOrder({name})}><FontAwesomeIcon icon="fa-solid fa-minus" color='black'/></button>
                      {/* <input  type="text" value={count}/> */}
                      <div className="price">
                        <p className="count_value">{count}</p>
                      </div>
                      <button className="btn btn-outline-success add-btn text-white rounded-0" type="button" id="button-addon1" onClick={() => addToOrder({name,price})} > <FontAwesomeIcon icon="fa-solid fa-plus" color='black'/></button>
                    </div>
                </div>
            </div>
        </div>
        })
      }

     
       <button className="btn btn-primary btn-lg btn-block fixed-bottom py-3" onClick={()=>checkOrder()} style={{backgroundColor:'#1e1d14',color:'#c59d5f'}}>
            <div className="d-flex justify-content-around">    
            <div>
                <FontAwesomeIcon icon="fa-solid fa-bowl-rice" />
                <span className="badge badge-light">
                    {order.reduce((acc, item) => {
                        return acc + item.count;
                    }, 0)}
                </span>
            </div>
            <div>
                Checkout
            </div>
            <div>
            ₵{total.toFixed(2)}
            </div>
            </div>
        </button>
    </div>
    
  );
};

export default Menu;