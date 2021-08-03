import React from 'react';
import {HashLink} from 'react-router-hash-link';

const PromoSlide = (props) => {
  const {promo} = props;
  const {heading, imageDesktop, imageTablet, imageMobile, alt, description, style, link, directTo} = promo;

  const getElementClass = (element) => {
    return (`${element} ${element + `--` + style}`)
  };

  const renderPromoLink = () => 
    link === `` ? 
    `` : 
    <HashLink className={getElementClass(`promo__link`)} to={directTo}>{link}</HashLink>

  return (
    <div className="promo__details">
      <h1 className={getElementClass(`promo__header`)}>{heading}</h1>
      <p className={getElementClass(`promo__description`)}>{description}</p>
      {renderPromoLink()}
      <picture>
        <source media="(max-width: 767px)" srcSet={imageMobile} />
        <source media="(max-width: 1023px)" srcSet={imageTablet} />
        <img className={getElementClass(`promo__image`)} src={imageDesktop} alt={alt} width="1366" height="400" />
      </picture>
    </div>
  )
}

export default PromoSlide;