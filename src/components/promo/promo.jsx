import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {slideInterval} from '../../const';

const Promo = () => {
  const promos = useSelector((state) => state.promos);

  const [activeSlidePromo, setActiveSlidePromo] = useState({
    id: promos[0].id
  });

  useEffect(() => {
    const interval = setInterval(() => {
      renderPromoSlide()
    }, slideInterval)
  }, []);

  const renderPromoSlide = () => {

  }



  return (
    <section className="main__promo promo">
      <div className="promo__container">
        <h1 className="promo__header">Лига Банк</h1>
        <p className="promo__description">Кредиты на любой случай</p>
        <Link className="promo__link" to="/page-not-found">Рассчитать кредит</Link>
        <img className="promo__cards-image" src="../img/cards-desktop.jpg" alt="Пример карт банка" width="1366" height="400" />
      </div>
    </section>
  )
}

export default Promo;