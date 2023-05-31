// Create a context provider for Retaurant name,address,phone number,images and logo

import React,{ createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const RestaurantContext = createContext();

const RestaurantContextProvider = (props) => {
  const [restaurant, setRestaurant] = useState({
      restaurantId: '',
      branchId: '',
      name: "",
      address: "",
      openTime: "",
      closeTime: "",
      openDays: "",
      phone: "",
      logo: "",
      image: "",
      paymentMethods:[],
      tableNumber: ''
  });

  useEffect(() => {
    setRestaurant({
      restaurantId: 1,
      branchId: 1,
      name: "Burger Houses",
      address: "1234 Main St, Anytown, CA 12345",
      openTime: "11:00 am",
      closeTime: "10:00 pm",
      openDays: "Mon - Sun",
      phone: "555-555-5555",
      logo: "logo.png",
      image: "restaurant.jpg",
      paymentMethods:["MoMo",'Vodafone Cash','tigoCash','VISA','MasterCard'],
      tableNumber: 1
    });
  }, []);

  const value = {
    restaurant,
    setRestaurant
  }

  return (
    <RestaurantContext.Provider value={value}>
      {props.children}
    </RestaurantContext.Provider>
  );
}

export default RestaurantContextProvider;

