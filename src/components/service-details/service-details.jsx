import React from 'react';
import {Link} from 'react-router-dom';
import {nanoid} from 'nanoid';


const ServiceDetails = (props) => {
  const {service} = props;
  const {heading, points, description, link, directTo, img, alt} = service;

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
      <img className="service-details__image" src={img} alt={alt} width="440" height="290" />
    </div>
  )
}

export default ServiceDetails;