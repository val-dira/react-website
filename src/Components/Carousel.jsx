import React, { useState } from 'react';
import './Carousel.css';
import { Link } from 'react-router-dom';
import { carouselData } from './CarouselData';

const Carousel = ({ slides }) => {
  
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
  

  // if (!Array.isArray(slides) || slides.length <= 0) {
  //   return null;
  // }

  return (
  <>
    <div className='carousel__main-section carousel'>
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
                <li className='carousel__item' key={index}>
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
          
                  <div className="carousel__item__info">
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
  </>
  )
}

export default Carousel



