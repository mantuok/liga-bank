import React from 'react';

const PromoSlide = (props) => {
  const {heading, image, description, style, link, directTo} = props;

  return (
    <div className="promo__container">
      <h1 className="promo__header">{heading}</h1>
      <p className="promo__description">{description}</p>
      <Link className="promo__link" to={directTo}>{link}</Link>
      <img className="promo__cards-image" src={image} alt={alt} width="1366" height="400" />
    </div>
  )
}

export default PromoSlide;