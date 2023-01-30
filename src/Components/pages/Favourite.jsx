import React, { useEffect } from "react";
import "../../App.css";
import CardItem from "../CardItem";

function Favourite({ favourites, setFavourites }) {
  useEffect(() => {
    console.log(favourites);
  }, []);

  return (
    <>
      <div className="favourite">
        <h1>Your saved items</h1>
        <h2>
          Here you'll find all your carefully selected favourites, neatly
          together.
        </h2>
      </div>
      {favourites?.map((card) => {
        <CardItem
          key={card.path}
          src={card.src}
          text={card.text}
          path={card.path}
          addFav={() => {
            setFavourites([...favourites, card]);
          }}
          removeFav={() => {
            console.log(favourites?.filter((item) => item.src !== card.src));
          }}
        />;
      })}
    </>
  );
}

export default Favourite;
