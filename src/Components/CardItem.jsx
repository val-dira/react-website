import React, { useState } from "react";
import { Link } from "react-router-dom";

function CardItem({ src, text, path, addFav, removeFav }) {
  const [click, setClick] = useState(false);

  const addColor = () => {
    setClick(!click);
    if (!click) {
      addFav();
    } else {
      removeFav();
    }
  };
  return (
    <>
      <li className="cards__item services__cards-color">
        <Link className="cards__item__link" to={path}>
          <figure className="card__item__pic-wrap">
            <img src={src} alt="Travel" className="cards__item__img" />
          </figure>
        </Link>
        <div className="image__label__div">
          {/* <p className='image__label__text'>{props.label}</p> */}
          <p className="favourite-icon">
            <i
              onClick={addColor}
              className={
                click
                  ? "fa-regular fa-heart fa-solid fa-heart"
                  : "fa-regular fa-heart"
              }
            ></i>
          </p>
        </div>

        <Link className="cards__item__link" to={path}>
          <div className="cards__item__info ">
            <h5 className="cards__item__text">{text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
