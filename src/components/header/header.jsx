import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className="page__header header">
      <div className="header__container container">
        <img className="header__logo" alt="ЛИГА Банк" src="../img/ligabank-logo.svg" width="149" height="25" />
        <nav className="header__navigation header-navigation">
          <ul className="header-navigation__list">
            <li className="header-navigation__item">
                <Link className="header-navigation__link" to="/page-not-found">Услуги</Link>
            </li>
            <li className="header-navigation__item">
                <Link className="header-navigation__link" to="/page-not-found">Рассчитать кредит</Link>
            </li>
            <li className="header-navigation__item header-navigation__item--active">
                <Link className="header-navigation__link header-navigation__link--active" to="">Конвертер валют</Link>
            </li>
            <li className="header-navigation__item">
                <Link className="header-navigation__link" to="/page-not-found">Контакты</Link>
            </li>
            <li className="header-navigation__item">
                <Link className="header-navigation__link" to="/page-not-found">Задать вопрос</Link>
            </li>
          </ul>
        </nav>
        <Link className="header__user-login user-login" to="/page-not-found">
          <span className="user-login__text">Войти в Интернет-банк</span>
        </Link>
      </div>
    </header>
  )
}

export default Header;