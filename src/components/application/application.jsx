import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {
  LoanMeta,
} from '../../const';

const Application = () => {
  const dispatch = useDispatch();
  const costAmount = useSelector((state) => state.costAmount);
  const loan = useSelector((state) => state.activeLoan);
  const loanType = loan.type;
  const loanTerm = useSelector((state) => state.loanTerm);
  const initialPayment = useSelector((state) => state.initialPayment);
  const previousApplicationNumber = useSelector((state) => state.applicationNumber);
  const currentApplicationNumber = previousApplicationNumber + 1;

  const handleApplicationSubmit = () => {
    dispatch(ActionCreator.setApplicationNumber(currentApplicationNumber));
    dispatch(ActionCreator.createApplication(false));
    dispatch(ActionCreator.openApplicationSentPopup());
    document.body.style.overflow = 'hidden';
  }

  return (
    <section className="calculation__application application">
      <h3 className="application__heading">Шаг 3. Оформление заявки</h3>
      <ul className="application__loan-data loan-data">
        <li className="loan-data__item">
          <span className="loan-data__name">Номер заявки</span>
          <span className="loan-data__value">{`№ ` + currentApplicationNumber}</span>
        </li>
        <li className="loan-data__item">
          <span className="loan-data__name">Цель кредита</span>
          <span className="loan-data__value">{loan.name}</span>
        </li>
        <li className="loan-data__item">
          <span className="loan-data__name">{LoanMeta[loanType].COST_AMOUNT_LABEL}</span>
          <span className="loan-data__value">{costAmount + `рублей`}</span>
        </li>
        <li className="loan-data__item">
          <span className="loan-data__name">Первоначальный взнос</span>
          <span className="loan-data__value">{initialPayment + `рублей`}</span>
        </li>
        <li className="loan-data__item">
          <span className="loan-data__name">Срок кредитования</span>
          <span className="loan-data__value">{loanTerm + `лет`}</span>
        </li>
      </ul>
      <form className="application__client-data client-data" action="" onSubmit={handleApplicationSubmit}>
        <label className="client-data__label visually-hidden">Фамилия Имя Отчество</label>
        <input className="client-data__value client-data__value--name" name="client-name" placeholder="ФИО" required />
        <label className="client-data__label visually-hidden">Телефон</label>
        <input 
          className="client-data__value client-data__value--tel" 
          type="tel" 
          name="client-tel"  
          placeholder="Телефон" 
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required 
        />
        <label className="client-data__label visually-hidden">E-mail</label>
        <input className="client-data__value client-data__value--email" name="client-email" placeholder="E-mail" required />
        <button className="application__submit">Отправить</button>
      </form>
    </section>
  )
}

export default Application;