import "./App.css";
import { RoutesList } from "@routes";
import React,{ Suspense } from "react";
import RestaurantContextProvider from "@context/RestaurantContextProvider";
import OrderContextProvider from "@context/OrderContextProvider";

// Fontaweosme Libary import
import { library } from '@fortawesome/fontawesome-svg-core'
import {faSquarePlus,faSquareMinus,faBowlRice,faHeart,faMinus,faPlus,faCoffee, faShoppingCart, faUser, faSearch, faBars, faTimes, faChevronDown, faChevronUp, faChevronRight, faChevronLeft, faStar, faStarHalfAlt, faStarHalf, faStarOfLife, faStarAndCrescent} from '@fortawesome/free-solid-svg-icons'
library.add(faSquarePlus,faSquareMinus,faBowlRice,faHeart,faMinus,faPlus,faCoffee, faShoppingCart, faUser, faSearch, faBars, faTimes, faChevronDown, faChevronUp, faChevronRight, faChevronLeft, faStar, faStarHalfAlt, faStarHalf, faStarOfLife, faStarAndCrescent)

function App() {
  return (
    <RestaurantContextProvider>
      <OrderContextProvider>
        <RoutesList/>
      </OrderContextProvider>
    </RestaurantContextProvider> 
  );
}
export default App;
