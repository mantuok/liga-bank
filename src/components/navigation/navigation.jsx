import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {useMediaQuery} from 'react-responsive';
import {ActionCreator} from '../../store/action';
import classNames from 'classnames';
import {
  NavigationItem,
  MenuButton,
  Viewport
} from '../../const';
import NavigationElement from '../navigation-element/navigation-element';
import Authorization from '../authorization/authorization';

const Navigation = () => {
  const dispatch = useDispatch();
  const popupToBeOpen = useSelector((state) => state.popupToBeOpen)
  const [menuMobileStatus, setMenuMobileStatus] = useState({
    isMenuOpen: false 
  });

  const onOpenPopup = () => {
    dispatch(ActionCreator.openPopup())
    document.body.style.overflow = 'hidden';
  }

  const isMobile = useMediaQuery({query: `(max-width: ${Viewport.Mobile.MAX})`});
  const isTablet = useMediaQuery({query: `(max-width: ${Viewport.Tablet.MAX})`});
  const isDesktop = useMediaQuery({query: `(min-width: ${Viewport.Desktop.MIN})`});
  const isDesktopOrTablet = useMediaQuery({query: `(min-width: ${Viewport.Tablet.MIN})`});

  const userLoginClass = classNames(`header-navigation__user-login user-login`, 
  {"user-login--open-menu": menuMobileStatus.isMenuOpen});

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
      <button 
        className={type.CLASS}
        onClick={() => handleMenuButtonClick(type)}
      >
        <span className="visually-hidden">{type.TEXT}</span>
      </button>
    )
  };

  const renderLoginText = () => {
    return (
      <span className="user-login__text">Войти в Интернет-банк</span>
    )
  };

  const renderAuthorizationPopup = popupToBeOpen ? <Authorization /> : ``; 

  const handleMenuButtonClick = (type) => {
    switch (type) {
      case MenuButton.Open:
        return setMenuMobileStatus({
          isMenuOpen: true
        })
      case MenuButton.Close: 
        return setMenuMobileStatus({
          isMenuOpen: false
        })
    }
  };

  const handleLoginButtonClick = () => {
    onOpenPopup();
  }

  return (
    <nav className="header__navigation header-navigation">
      {isMobile && renderMenuButton(MenuButton.Open)}
      {menuMobileStatus.isMenuOpen && renderMenuButton(MenuButton.Close)}
      <ul className="header-navigation__list">
        {
          (menuMobileStatus.isMenuOpen && renderNavigationItems()) || 
          (isDesktopOrTablet && renderNavigationItems())
        }
        <li className={userLoginClass}>
          <button 
            className="user-login__button" to="/page-not-found"
            onClick={handleLoginButtonClick}
          >
            {
              (isDesktop && renderLoginText()) ||
              (menuMobileStatus.isMenuOpen && renderLoginText())
            }
          </button>
        </li>
      </ul>
      {renderAuthorizationPopup}
    </nav>
  )
};

export default Navigation;
