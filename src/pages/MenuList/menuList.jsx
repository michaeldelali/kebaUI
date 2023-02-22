import React, { useState } from 'react';
import Categories from '../../components/Categories';
import Menu from '../../components/Menu';
import MenuTitle from '../../components/MenuTitle/MenuTitle';
import './menuList.css'
import items from '../../data/menuData'
const allCategories = ['all',...new Set(items.map(item => item.category))];

function MenuList() {
  const [menuItems,setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }


  // const imgPath = require('../assets/images/' + img);
  // const background = require('../assets/background/background.jpg')
  return <main>
    {/* <section className='menu section' style={{backgroundImage:"url('https://images.unsplash.com/photo-1615799998603-7c6270a45196?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2008&q=80')"}}> */}
    <section className='menu section'>
      <MenuTitle/>
      <Categories categories={categories} filterItems={filterItems} />  
      <Menu items={menuItems} />
    </section>
  </main>;
}

export default MenuList;