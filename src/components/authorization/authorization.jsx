import React, {useState, useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {Link} from 'react-router-dom';
import {Key} from '../../const';

const Authorization = () => {
  const dispatch = useDispatch();
  const [authData, setAuthData] = useState({
    login: ``,
    password: ``,
    showPassword: false
  });

  useEffect(() => {
    document.addEventListener(`keydown`, escKeydownHandler);
    return (
      () => {
        document.removeEventListener('keydown', escKeydownHandler)
      }
    )
  });

  const getPasswordInputType = () => authData.showPassword ? `text` : `password`

  const escKeydownHandler = (evt) => {
    if (evt.keyCode === Key.ESC) {
      onClosePopup();
    }
  };

  const handleCloseButtonClick = () => {
    onClosePopup();
  };

  const handleInputChange = (evt) => {
    const {name, value} = evt.target;
    setAuthData({
      ...authData,
      [name]: value
    })
  };

  const handleShowPassowrdMouseDown = (evt) => {
    evt.preventDefault();
    setAuthData({
      ...authData,
      showPassword: true
    })
  };

  const handleShowPassowrdMouseUp = (evt) => {
    evt.preventDefault();
    setAuthData({
      ...authData,
      showPassword: false
    })
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
        <form className="auth__form auth-form" action="">
          <label className="auth-form__label auth-form__label--login" htmlFor="login">Логин</label>
          <input 
            className="auth-form__input auth-form__input--login" 
            id="login" 
            name="login"
            value={authData.login}
            onChange={handleInputChange}
            autoFocus
            required
          ></input>
          <label className="auth-form__label auth-form__label--password" htmlFor="password">Пароль</label>
          <input 
            className="auth-form__input auth-form__input--password" 
            type={getPasswordInputType()}
            id="password" 
            name="password"
            value={authData.value}
            onChange={handleInputChange}
            required
          ></input>
          <button
           className="auth-form__show-password"
           onMouseDown={handleShowPassowrdMouseDown}
           onMouseUp={handleShowPassowrdMouseUp}
           type="button"
          >
            <span className="visually-hidden">Показать пароль</span>
          </button>
          <Link className="auth-form__forgot-password" to="/page-not-found">Забыли пароль?</Link>
          <button 
            className="auth-form__submit"
            type="submit"
          >
            Войти
          </button>
        </form>
      </div>
    </section>
  )
};

export default Authorization;