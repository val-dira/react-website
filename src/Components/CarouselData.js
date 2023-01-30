export const carouselData = [
  { 
    src:"images/singapore-city.jpg",
    text:"Explore cityscape in singapore city skyline",
    path:"/products"
  },
    {
    src:"images/ocean-travel.jpg",
    text:"Explore the hidden waterfall deep inside the Amazon jungle", 
    path:"/sign-up"
  },
    {
    src:"images/img-4.jpg",
    text:"Experience Football on Top of the Himalayan Mountains",
    path:"/services"
  },
    {
    src:"images/img-9.jpg",
    text:"Explore the hidden waterfall deep inside the Amazon jungle",
    path:"/products"
  }, 
    {
    src:"images/img-8.jpg",
    text:"Ride through the sahara Desert on a guided camel tour", 
    path:"/sign-up"
  }  
]

export const slideData = [
  { 
    src:"images/singapore-city.jpg",
    heading: "Regions",
    subheading: "The fantastic four",
    text:"Planning a trip to Finland but don't know where to start? No worries. Let us introduce you to our four main regions, or as we like to call them, the fantastic four. Keep scrolling to learn more ",
    btn:"Explore",
    path:"/products"
  },
    {
    src:"images/ocean-travel.jpg",
    heading: "Lapland",
    subheading: "A magical northern region full of contrasts",
    text:"The sun never set in summer, and during the rest of the year, the Aurora Borealis lights up the sky.", 
    btn:"Explore Lapland",
    path:"/sign-up"
  },
    {
    src:"images/img-4.jpg",
    heading: "Lakeland",
    subheading: "A stunning labyrinth Of laskes, islands, and forests",
    text:"There is no scene more Finnish than a cosy cottage by a lake surrounded by emerald green forests.",
    btn:"Explore Lakeland",
    path:"/services"
  },
    {
    src:"images/img-9.jpg",
    heading: "Coast and Archipelago",
    subheading: "The world's largest archipelago",
    text:"Fall in love with its windswept beaches, maritime culture and easy-going island lifestyle",
    btn:"Explore Coast and Archipelago",
    path:"/products"
  }, 
    {
    src:"images/img-8.jpg",
    heading: "Helsinki Region",
    subheading: "Urban life with convenient access to nature",
    text:"Experience the perfect combination of urban and outdoors, lively and laid-back", 
    btn:"Explore Helsinki Region",
    path:"/sign-up"
  }  
]

export const FAQData = [
  {
    question: "What's the best time of the to visit Finland",
    answer: "Finland is a year-round destination. Winters are great for outdoor activities like downhill skiing, cross-country skiing, skating and ice-swimming. Spring and autumn are the best seasons to see the Northern Lights in Finnish Lapland. Late summer and autumn are ideal for foraging and enjoying colourful autumn foliage. The spring months (until early May) offer the best skiing in Lapland – in the south, the snow will be gone by then. The summer months across Finland are known for their white nights, and in Lapland, as a time when the sun never sets. Big cities have interesting things to see and do all year, and across Finland, it's always sauna season. "
  },

  {
    question: "Do I need a passport or visa to enter the country",
    answer: "You need a valid national passport or another equivalent that satisfactorily establishes your identity and nationality. If you are not a citizen of Finland or another European Economic Area (EEA) country, you may also need a visa. Please check with your local Finnish Embassy, and they will be happy to help you."
  },

  {
    question: "What are some basic facts about finland",
    answer: "Finland is a Nordic country that’s located in northern Europe by the Baltic Sea. It has some 5.5 million inhabitants and has been recognized as the happiest country in the world for several years running."

  },

  {
    question: "Where should I go to in Finnland",
    answer: "Finland has four main regions that offer various activities and attractions, and they're all worth visiting. To learn more, visit the Lapland, Lakeland, Coast and Archipelago, and Helsinki Region pages."
  }

]






























// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

// function CarouselBox(props) {
//     const [click, setClick] = useState(false)

//     const addColor = () => setClick(!click)
//     return (
//       <>
//         <li className='carousel__item'>
//           <Link className='carousel__item__link'to={props.path}/>
//           <figure className='carousel__item__pic-wrap'>
//               <img 
//               src={props.src} 
//               alt="Travel" 
//               className='carousel__item__img'/>
//           </figure>
//           <div className="image__slide__div">
//             {/* <p className='image__label__text'>{props.label}</p> */}
//             <p className='favourite-icon'><i onClick={addColor} className={click ? 'fa-regular fa-heart fa-solid fa-heart' : 'fa-regular fa-heart' }></i></p>
//           </div>
          
//           <div className="carousel__item__info">
//               <h5 className='carousel__item__text'>{props.text}</h5>
//           </div>
//         </li>
//       </>
//     )
// }

// export default CarouselBox