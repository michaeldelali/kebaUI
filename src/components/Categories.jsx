import React from 'react';

const Categories = React.memo(({ categories = [], filterItems }) => {
  return (
    <nav className='btn-container sticky-top' style={{ backgroundColor: '#1e1d14' }}>
      {categories.map((category) => {
        return (
          <button
          type='button'
          className='filter-btn'
          key={category}
          onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </nav>
  );
});


export default Categories;
