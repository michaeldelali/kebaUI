import React, {useContext,useEffect,useState} from 'react'
import {RestaurantContext} from '@context/RestaurantContextProvider'
import BlurhashImage from '../ImageBlurHash'
import './MenuTitle.css'
// import background from '../../assets/background/background.jpg'
// const img = 'item-1'
// import imgPath from '@assets/images/item-1.jpeg'

function MenuTitle() {
  const {restaurant} = useContext(RestaurantContext) 
  console.log("Restaurant@Tiltle",restaurant)
  // const imgPath = new URL(`@assets/images/item-1.jpeg`, import.meta.url).href
  const img = 'item-1'
  // const imgPath = new URL(`@assets/images/${img}.jpeg`, import.meta.url)
  const [imgPath,setImagePath] = useState()
  // import background from '../../assets/background/${restaurant.image}'

  // const background = require(`../../assets/background/${restaurant.image}`)
  
//   useEffect(() => {
  //   console.log("Restaurant",restaurant)
  //   setImagePath(()=>{
  //     // return new URL(`@assets/images/item-1.jpeg`, import.meta.url).href
  //     return 'src/assets/background/'+restaurant.image
  //   })
  // }, [restaurant]);
 
  // }, [restaurant]);
  
  // const image = require(`../../assets/background/${restaurant.image}`)
  
  // console.log("imgPath",imgPath)

  return (
    // <div className='title_section' 
    //   style={{ backgroundImage: `url(${restaurant.banner})`,
    //                 backgroundPosition: 'center',
    //                 backgroundSize: 'cover',
    //                 backgroundRepeat: 'no-repeat'
    //               }}
    // >
    //     <div className='title'>
    //         <h2>{restaurant.branchName}</h2>
    //         <div className='underline'></div>
    //     </div>
    // </div>

    // <div className="banner">
    //   <img
    //     src='	https://keba-bucket.s3.eu-west-2.amazonaws.com/pexels-jan-n-g-u-y-e-n-%F0%9F%8D%81-699953.jpg'
    //     alt="Banner Image"
    //     className="banner-image"
    //   />
    //   <h1 className="restaurant-name">Restaurant Name</h1>
    //   <div className="banner-overlay"></div>
    // </div>
    <div className="banner">
    {/* <img
        src='	https://keba-bucket.s3.eu-west-2.amazonaws.com/pexels-jan-n-g-u-y-e-n-%F0%9F%8D%81-699953.jpg'
        alt="Banner Image"
        className="banner-image"
    /> */}
    <BlurhashImage
      src={'https://keba-bucket.s3.eu-west-2.amazonaws.com/pexels-jan-n-g-u-y-e-n-%F0%9F%8D%81-699953.jpg'}
      hash={'LOMi$i#?yD56f+nlNFNb^-EKq[Vs'}
      width={390}
      height={200}
      alt="My image"
    />
    <div className="overlay"></div>
    <div className='center-stuff'>
      <h1 className="restaurantName">
        Maame's Kitchen
      </h1>
    </div>
    <div className="ruler center-stuff"></div>
  </div>  
  )
}

export default MenuTitle