import React from 'react';
import {useMediaQuery} from 'react-responsive';
import {
  NavigationItem,
  Viewport,
  MenuButton
} from '../../const';
import NavigationElement from '../navigation-element/navigation-element';

const Navigation = () => {

  const isMobile = useMediaQuery({query: `(max-width: ${Viewport.Mobile.MAX})`});
  const isTablet = useMediaQuery({query: `(max-width: ${Viewport.Tablet.MAX})`});
  const isDesktop = useMediaQuery({query: `(min-width: ${Viewport.Desktop.MIN})`});
  const isDesktopOrTablet = useMediaQuery({query: `(min-width: ${Viewport.Tablet.MIN})`});

  const renderNavigationItems = () => {
    return Object.values(NavigationItem.header).map((element) => {
      return <NavigationElement
        key={element.ID}
        name={element.NAME}
        link={element.LINK}
      />
    })
  };

  const renderMenuButton = (type) => {
    return (
      <button className={type.CLASS}>
        <span className="visually-hidden">{type.TEXT}</span>
      </button>
    )
  }

  return (
    <nav className="header__navigation header-navigation">
      {isMobile && renderMenuButton(MenuButton.Open)}
      <ul className="header-navigation__list">
        {isDesktopOrTablet && renderNavigationItems()}
      </ul>
      {isMobile && renderMenuButton(MenuButton.Close)}
    </nav>
  )
};

export default Navigation;
