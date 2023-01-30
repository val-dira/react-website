import React, { useState } from 'react'
import { slideData } from './CarouselData';
import { Button } from './Button';
import './HeroSection.css';
import './ImageSlide.css';
import '../App.css';

const ImageSlide = ( { slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1) 
    };
    
    
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    };

  return (
    <div className='imageSlide-container'>
        {
            slideData.map((slide, index) => {
                return (
                    <div>
                        <div className={index === current ? 'imageSlide imageSlide--active' : 'imageSlide'}  key={index}>
                            {index === current && (<img src={slide.src} alt="slide" />)}
                            
                            <div className="content">
                                <h3>{slide.heading}</h3>
                                <h1>{slide.subheading}</h1>
                                <p>{slide.text}</p>

                                <div className='hero-btns'>
                                    <Button className='btns slide-btn' buttonStyle='btn--primary' buttonSize='btn--large'>{slide.btn}<i class="fas fa-arrow-right"></i></Button>  
                                </div>
                            </div>
                            <div className="imageSlide-btns">
                                <div className="round__imageSlide-btns">
                                    <div className='round__imageSlide-btn'></div>
                                    <div className='round__imageSlide-btn'></div>
                                    <div className='round__imageSlide-btn'></div>
                                    <div className='round__imageSlide-btn'></div>
                                    <div className='round__imageSlide-btn'></div>
                                </div>

                                <div className="imageSlide__arrow-btns">
                                    <div className='imageSlide__arrow-btn__left imageSlide__arrow-btn'>
                                        <i className="fa-solid fa-angle-left" onClick={prevSlide}></i>
                                    </div>
                                    <div className='imageSlide__arrow-btn__right imageSlide__arrow-btn'>
                                        <i className="fa-solid fa-angle-right" onClick={nextSlide}></i>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                )
            })
        }
    
    </div>
  )
}

export default ImageSlide