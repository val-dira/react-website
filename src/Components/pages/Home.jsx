import React from "react";
import HeroSection from "../HeroSection";
import "../../App.css";
import Cards from "../Cards";
import Footer from "../Footer";
import Carousel from "../Carousel";
import { carouselData, slideData } from "../CarouselData";
import ImageSlide from "../ImageSlide";
import Accordion from "../Accordion";

function Home({ favourites, setFavourites }) {
  return (
    <>
      <HeroSection />
      <Cards
        favourites={favourites}
        setFavourites={(data) => {
          setFavourites(data);
        }}
      />
      <Carousel slides={carouselData} />
      <ImageSlide slides={slideData} />
      <Accordion />
      <Footer />
    </>
  );
}

export default Home;
