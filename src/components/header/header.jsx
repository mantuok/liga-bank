import React from 'react';
import Navigation from '../navigation/navigation';

const Header = () => {
  return (
    <header className="page__header header">
      <div className="header__container container">
        <picture>
          <source media="(max-width: 767px)" srcSet="../img/liga-logo-mobile.svg" />
          <source media="(max-width: 1023px)" srcSet="../img/liga-logo-tablet.svg" />
          <img className="header__logo" alt="ЛИГА Банк" src="../img/liga-logo-desktop.svg" width="150" height="27" />
        </picture>
        <Navigation />
      </div>
    </header>
  )
}

export default Header;