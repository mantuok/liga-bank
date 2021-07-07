import React from 'react';
import {Link} from 'react-router-dom';

const NavigationElement = (props) => {
  const {name, link} = props;

  return (
    <li className="header-navigation__item">
      <Link className="header-navigation__link" to={link}>{name}</Link>
    </li>
  )
}

export default NavigationElement;