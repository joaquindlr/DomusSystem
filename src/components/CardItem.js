import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure
            className="cards__item__pic-wrap"
            data-category={props.condicion}
          >
            <img
              className="cards__item__img"
              alt="Travel Image"
              src={props.src}
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__title">{props.title}</h5>
            <h6 className="cards__item__price">${props.price}</h6>
            <p className="cards__item__description">{props.description}</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
