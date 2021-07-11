import React from 'react';
import {Link} from 'react-router-dom';

const PromoSlide = (props) => {
  const {promo} = props;
  const {heading, image, alt, description, style, link, directTo} = promo;

  const getElementClass = (element) => {
    return (`${element} ${element + `--` + style}`)
  };

  const renderPromoLink = () => 
    link === `` ? 
    `` : 
    <Link className={getElementClass(`promo__link`)} to={directTo}>{link}</Link>

  return (
    <div className="promo__container">
      <h1 className={getElementClass(`promo__header`)}>{heading}</h1>
      <p className={getElementClass(`promo__description`)}>{description}</p>
      {renderPromoLink()}
      <img className={getElementClass(`promo__image`)} src={image} alt={alt} width="1366" height="400" />
    </div>
  )
}

export default PromoSlide;