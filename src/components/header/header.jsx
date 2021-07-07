import React from 'react';
import {Link} from 'react-router-dom';
import Navigation from '../navigation/navigation';

const Header = () => {
  return (
    <header className="page__header header">
      <div className="header__container container">
        <img className="header__logo" alt="ЛИГА Банк" src="../img/liga-logo-desktop.svg" width="150" height="27" />
        <Navigation />
        <Link className="header__user-login user-login" to="/page-not-found">
          <span className="user-login__text">Войти в Интернет-банк</span>
        </Link>
      </div>
    </header>
  )
}

export default Header;