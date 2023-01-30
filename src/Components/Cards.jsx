import React, { useState } from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards({ favourites, setFavourites }) {
  // const [favourites, setFavourites] = useState(0);
  const CardData = [
    {
      src: "images/singapore-city.jpg",
      text: "Explore cityscape in Singapore city skyline",
      path: "/products",
    },
    {
      src: "images/ocean-travel.jpg",
      text: "Explore the hidden waterfall deep inside the Amazon",
      path: "/sign-up",
    },
    {
      src: "images/img-4.jpg",
      text: "Experience football on Top of the Himalayan mountains",
      path: "/services",
    },
    {
      src: "images/img-9.jpg",
      text: "Explore the hidden waterfall deep inside the Amazon",
      path: "/products",
    },
    {
      src: "images/img-8.jpg",
      text: "Ride through the sahara Desert on a guided camel tour",
      path: "/sign-up",
    },
  ];

  return (
    <div className="cards">
      <h1 className="cards-header">
        Check out these Epic Destinations! ({favourites?.length})
      </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {CardData.slice(0, 2).map((card) => (
              <CardItem
                key={card.path}
                src={card.src}
                text={card.text}
                path={card.path}
                addFav={() => {
                  setFavourites([...favourites, card]);
                }}
                removeFav={() => {
                  setFavourites(
                    favourites?.filter((item) => item.src !== card.src)
                  );
                }}
              />
            ))}
          </ul>
          <ul className="cards__items">
            {CardData.slice(2, 5).map((card) => (
              <CardItem
                key={card.path}
                src={card.src}
                text={card.text}
                path={card.path}
                addFav={() => {
                  // setFavourites([...favourites, card]);
                  localStorage.setItem(
                    "Favourites",
                    JSON.stringify([...favourites, card])
                  );
                }}
                removeFav={() => {
                  // setFavourites(
                  //   favourites?.filter((item) => item.src !== card.src)
                  // );
                  localStorage.setItem(
                    "Favourites",
                    JSON.stringify(
                      favourites?.filter((item) => item.src !== card.src)
                    )
                  );
                }}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
