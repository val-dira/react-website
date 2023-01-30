import React,{useEffect} from "react";
import '../../App.css';
import Cards from '../Cards';
import Carousel from '../Carousel';
import { carouselData, slideData } from '../CarouselData';
import Footer from '../Footer';
import ImageSlide from '../ImageSlide';


function Products() {
 
  return (
    <>
    <div className='products' >
      <h1>What's On In Finland</h1>
      <h2>From relaxing in nature to celebrating in the city, there are plenty of things to do in Europe's north..</h2>
      
    </div>

    <ImageSlide slides={slideData}/>
    <Cards />
    <Carousel slides={carouselData}/>
    <Footer />
    </>
  )
}

export default Products