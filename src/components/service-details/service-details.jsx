import React from 'react';
import {Link} from 'react-router-dom';
import {nanoid} from 'nanoid';


const ServiceDetails = (props) => {
  const {service} = props;
  const {heading, points, description, link, directTo, imgDesktop, imgTablet, imgMobile, alt} = service;

  const isElementEmpty = (element) => element === ``;

  const renderServicePoints = () => {
    let servicePoints = [];
    points.forEach((point) => {
      servicePoints.push(<li className="service-details__point"  key={nanoid()}>{point}</li>) 
    });
    return servicePoints;
  };

  return (
    <div className="services__service-details service-details">
      <h3 className="service-details__heading">{heading}</h3>
      {isElementEmpty(points) ? `` : 
        <ul className="service-details__points">
          {renderServicePoints()}
        </ul>
      }
      {isElementEmpty(description) ? `` : <p className="service-details__description">{description}</p>}
      {isElementEmpty(link) ? `` : <Link className="service-details__link" to={directTo}>{link}</Link>}
      <picture className="service-details__image-wrapper" >
        <source media="(max-width: 767px)" srcSet={imgMobile} />
        <source media="(max-width: 1023px)" srcSet={imgTablet} />
        <img className="service-details__image" src={imgDesktop} alt={alt} width="440" height="290" />
      </picture>
      
    </div>
  )
}

export default ServiceDetails;