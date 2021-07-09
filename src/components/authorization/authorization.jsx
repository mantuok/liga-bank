import React, {useState, useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {Link} from 'react-router-dom';
import {Key} from '../../const';

const Authorization = () => {
  const dispatch = useDispatch();
  const [authData, setAuthData] = useState({
    login: ``,
    password: ``
  });

  useEffect(() => {
    document.addEventListener(`keydown`, escKeydownHandler);
    return (
      () => {
        document.removeEventListener('keydown', escKeydownHandler)
      }
    )
  });

  const escKeydownHandler = (evt) => {
    if (evt.keyCode === Key.ESC) {
      onClosePopup();
    }
  };

  const handleCloseButtonClick = () => {
    onClosePopup();
  };

  const onClosePopup = () => {
    dispatch(ActionCreator.closePopup());
    document.body.style.overflow = 'scroll';
  };

  return (
    <section className="header__authorization auth">
      <div className="auth__popup">
        <img className="auth__logo" src="../img/liga-logo-full.svg"></img>
        <button 
          className="auth__close"
          onClick={handleCloseButtonClick}
        >
          <span className="visually-hidden">Закрыть окно</span>
        </button>
        <form className="auth__form form" action="">
          <label className="form__label form__label--login" htmlFor="login">Логин</label>
          <input className="form__input form__input--login" id="login" name="login"></input>
          <label className="form__label form__label--password" htmlFor="password">Логин</label>
          <input className="form__input form__input--password" id="password" name="password"></input>
          <button className="form__show-password">
            <span className="visually-hidden">Показать пароль</span>
          </button>
          <Link className="auth__forgot-password" to="/page-not-found">Забыли пароль?</Link>
          <button 
            className="auth__submit"
            // onClick={}
          >
            Войти
          </button>
        </form>
      </div>
    </section>
  )
};

export default Authorization;