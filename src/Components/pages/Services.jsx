import React, { useState } from 'react';
import '../../App.css';
import './Services.css';
import { Link } from 'react-router-dom';
import CardItem from '../CardItem.jsx';
import '../Cards.css';
import { carouselData } from '../CarouselData';
import Footer from '../Footer';

function Services( { slides }) {
  const [click, setClick] = useState(false)

  const addColor = () => setClick(!click)
  

  const [current, setCurrent] = useState(0)


  const prevSlide = () => {
    const isFirstSlide = current === 0;
    const newIndex = isFirstSlide? slides.length - 1 : current - 1;
    setCurrent(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = current === slides.length - 1;
    const newIndex = isLastSlide ? 0 : current + 1;
    setCurrent(newIndex);
  }

  return (
    <>
    
    <div className='services'>
      <h1>Destinations in Finland</h1>
      <h2>Finland's four regions and distinct seasons offer seemingly endless things to do and see.</h2>
      
    </div>
    
    <div className='services__main-section'>
      <div className='services__regions cards'>
        <div className="services__main-text cards__items">
          <h2 className='services__second-header'>Finnish Regions</h2>
          <p className='Services__first-paragraph'>Finland's four regions all have unique characteristics, and each season brings something new to experience. Happy exploring!</p>
        </div>
        
        
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items service__cards-items'>
            <CardItem 
               src="images/singapore-city.jpg" 
               text="Hanko
               Charming seaside resort and the southernmost city of Finland." 
               path="/products"
               />
               <CardItem 
               src="images/ocean-travel.jpg" 
               text="Explore the hidden waterfall deep inside the Amazon jungle" 
               path="/sign-up"
               />
            </ul>
            <ul className='cards__items service__cards-items'>
               <CardItem 
               src="images/img-4.jpg" 
               text="Experience Football on Top of the Himalayan Mountains" 
               path="/services"
               />
               <CardItem 
               src="images/img-9.jpg" 
               text="Explore the hidden waterfall deep inside the Amazon jungle" 
               path="/products"
               />
               <CardItem 
               src="images/img-8.jpg" 
               text="Ride through the sahara Desert on a guided camel tour" 
               path="/sign-up"
               />
            </ul>
          </div>
        </div>

      </div>
    
    </div>

    <div className='services__main-section'>
      <div className='services__regions cards services-bg'>
        <div className="services__main-text cards__items">
          <h2 className='services__second-header'>Destination Highlight</h2>
          <p className='Services__first-paragraph'>Whether you're looking for an urban holiday or a nature escape or a bit of both there's sure to be a destination that's right for you. Browse these options to find your next port of call.</p>
        </div>

        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items service__cards-items'>
            <CardItem 
               src="images/img-10.jpg" 
               text="Explore cityscape in singapore city skyline" 
               path="/products"
               />
               <CardItem 
               src="images/img-2.jpg" 
               text="Explore the hidden waterfall deep inside the Amazon jungle" 
               path="/sign-up"
               />
               <CardItem 
               src="images/img-18.jpg" 
               text="Explore the hidden waterfall deep inside the Amazon jungle" 
               path="/sign-up"
               />
            </ul>
            <ul className='cards__items service__cards-items'>
              <CardItem 
              src="images/img-12.jpg" 
              text="Experience Football on Top of the Himalayan Mountains" 
              path="/services"
              />
              <CardItem 
              src="images/img-13.jpg" 
              text="Explore the hidden waterfall deep inside the Amazon jungle" 
              path="/products"
              />
              <CardItem 
              src="images/img-14.jpg" 
              text="Ride through the sahara Desert on a guided camel tour" 
              path="/sign-up"
              />
            </ul>
          </div>
        </div>

      </div>
    </div>


    <div className='carousel__main-section carousel service-carousel'>
      <div className='carousel-box'>
        <div className="carousel__main-text">
          <h2 className='carousel__second-header'>Finnish Regions</h2>
          <p className='carousel__first-paragraph'>Finland's four regions all have unique characteristics, and each season brings something new to experience. Happy exploring!</p>
        </div>
        
        <div className='slider-container'>
          <div className='slider-btn__left slider-btn' >
            <i className="fa-solid fa-angle-left" onClick={prevSlide}></i>
          </div>

          <ul className="slide carousel__items">
            {
              carouselData.map((slide, index) => {
                return (
                <li className='carousel__item services-carousel__item' key={index}>
                  <Link className='carousel__item__link'to={slide.path}/>
                  <figure className='carousel__item__pic-wrap'>
                  <img 
                  src={slide.src} 
                  alt="Travel" 
                  className='carousel__item__img'/>
                  </figure>
                  <div className="image__slide__div">
                  {/* <p className='image__label__text'>{props.label}</p> */}
                  <p className='favourite-icon'><i onClick={addColor} className={click ? 'fa-regular fa-heart fa-solid fa-heart' : 'fa-regular fa-heart' }></i></p>
                  </div>
          
                  <div className="carousel__item__info services-carousel__item__info">
                  <h5 className='carousel__item__text'>{slide.text}</h5>
                  </div>
                </li>
                )
                })
              }
          </ul>
          <div className='slider-btn__right slider-btn'>
            <i className="fa-solid fa-angle-right" onClick={nextSlide}></i>
          </div>
        </div>
      </div>
    
    </div>
    
    <Footer />
   </>
  )
}

export default Services