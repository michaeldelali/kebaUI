import React from 'react';

const Categories = ({categories,filterItems}) => {
  return <nav className='btn-container sticky-top' style={{backgroundColor:'#1e1d14'}}>
    {categories.map((category,index) => {
      return <button 
        type='button' 
        className='filter-btn' 
        key={index}
        onClick={() => filterItems(category)}
        >
        {category}
      </button>
    })}
  </nav>;
};

export default Categories;
