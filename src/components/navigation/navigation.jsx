import React from 'react';
import {NavigationItem} from '../../const';
import NavigationElement from '../navigation-element/navigation-element';

const Navigation = () => {

  const renderNavigationItems = () => {
    return Object.values(NavigationItem.header).map((element) => {
      return <NavigationElement
        key={element.ID}
        name={element.NAME}
        link={element.LINK}
      />
    })
  }

  return (
    <nav className="header__navigation header-navigation">
      <ul className="header-navigation__list">
        {renderNavigationItems()}
      </ul>
    </nav>
  )
};

export default Navigation;
