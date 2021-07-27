import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {Key} from '../../const';

const ApplicationSent = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    document.addEventListener(`keydown`, escKeydownHandler);
    return (
      () => {
        document.removeEventListener('keydown', escKeydownHandler)
      }
    )
  });

  const handleCloseButtonClick = () => {
    onClosePopup();
  };

  const escKeydownHandler = (evt) => {
    if (evt.keyCode === Key.ESC) {
      onClosePopup();
    }
  };

  const onClosePopup = () => {
    dispatch(ActionCreator.closeApplicationSentPopup());
    dispatch(ActionCreator.clearLoanData());
    document.body.style.overflow = 'scroll';
  };

  return (
    <section className="calculator_application-sent application-sent">
      <div className="application-sent__popup">
        <h3 className="application-sent__heading">Спасибо за обращение в наш банк.</h3>
        <p className="application-sent__text">Наш менеджер скоро свяжется с вами по указанному номеру телефона.</p>
        <button 
          className="application-sent__close"
          type="button"
          onClick={handleCloseButtonClick}
        >
          <span className="application-sent__close-text visually-hidden">Закрыть</span>
        </button>
      </div>
    </section>
  )
}

export default ApplicationSent;