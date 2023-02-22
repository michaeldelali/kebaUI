import React, {useContext,useEffect,useState} from 'react'
import {RestaurantContext} from '@context/RestaurantContextProvider'
import './MenuTitle.css'
// import background from '../../assets/background/background.jpg'
// const img = 'item-1'
// import imgPath from '@assets/images/item-1.jpeg'

function MenuTitle() {
  const {restaurant} = useContext(RestaurantContext) 
  // const imgPath = new URL(`@assets/images/item-1.jpeg`, import.meta.url).href
  const img = 'item-1'
  // const imgPath = new URL(`@assets/images/${img}.jpeg`, import.meta.url)
  const [imgPath,setImagePath] = useState()
  // import background from '../../assets/background/${restaurant.image}'

  // const background = require(`../../assets/background/${restaurant.image}`)
  
  useEffect(() => {
  console.log("Restaurant",restaurant)
  setImagePath(()=>{
    // return new URL(`@assets/images/item-1.jpeg`, import.meta.url).href
    return 'src/assets/background/'+restaurant.image
  })
}, [restaurant]);

  // }, [restaurant]);
  
  // const image = require(`../../assets/background/${restaurant.image}`)
  
  console.log("imgPath",imgPath)

  return (
    <div className='title_section' 
      style={{ backgroundImage: `url(${imgPath})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}
    >
        <div className='title'>
            <h2>{restaurant.name}</h2>
            <div className='underline'></div>
        </div>
    </div>
  )
}

export default MenuTitle