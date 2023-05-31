import React, { useState, useEffect,useContext } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import Categories from '../../components/Categories';
import Menu from '../../components/Menu';
import MenuTitle from '../../components/MenuTitle/MenuTitle';
import './menuList.css';
import {RestaurantContext} from '@context/RestaurantContextProvider'
import NotFound from '../notFound/NotFound';
import { faPassport } from '@fortawesome/free-solid-svg-icons';
import axios from '@components/axios'


function MenuList() {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [itemsStorage, setItemsStorage] = useState([]);
  const { branchId, tableNumber } = useParams();
  const {setRestaurant,restaurant} = useContext(RestaurantContext)
  const navigate = useNavigate();

  if (isNaN(branchId)==false && isNaN(tableNumber)==false){
    // Do something if it's not a number
  }else{
    return <NotFound/>
  }
  
  const fetchMenuItems = async () => {
    try {
      const response = await axios.post('/customer/viewBranchMenuByView',{branchId: branchId}).then((response) => {
        const items = response.data;
        setItemsStorage(items);	
        setMenuItems(items);
        setRestaurant({...restaurant,tableNumber:tableNumber})
        const allCategories = ['all', ...new Set(items.map((item) => item.category))];
        setCategories(allCategories);
      }).catch((error) => {
        console.log(error);
        navigate('/404');
        // return <NotFound/>
      });
    } catch (error) {
      console.log(error);
      navigate('/404');
      // return <NotFound/>
    }
  };
  
  const fetchBranchInfo = async () => {
    try {
      axios.post('/customer/viewBranchInfo', {branchId: branchId}).then((response) => {
        console.log("Branch Info::",response.data)
        setRestaurant(response.data);
      }).catch((error) => {
        console.log(error);
        navigate('/404');
        // return <NotFound/>
      });
    } catch (error) {
      console.log(error);
      navigate('/404');
      // return <NotFound/>
    }}


  useEffect(() => {
    fetchBranchInfo();
    fetchMenuItems();
    console.log("Restaurant::",restaurant)
  }, []);

  // useEffect(() => {
  //   const allCategories = ['all', ...new Set(itemsStorage.map((item) => item.category))];
  //   setCategories(allCategories);
  // }, [menuItems]);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(itemsStorage);
    } else {
      const newItems = itemsStorage.filter((item) => item.category === category);
      setMenuItems(newItems);
    }
  };

  return (
    <main>
      <section className='menu section'>
        <MenuTitle />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default MenuList;
