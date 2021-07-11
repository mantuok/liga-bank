import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {slideInterval} from '../../const';
import PromoSlide from '../promo-slide/promo-slide';

const Promo = () => {
  const promos = useSelector((state) => state.promos);
  const promosMaxIndex = promos.length - 1;
  const initialPromoIndex = 0;

  const [activeSlidePromo, setActiveSlidePromo] = useState({
    elementIndex: initialPromoIndex
  });

  useEffect(() => {
    const interval = setInterval(() => {
      changeActivePromoSlide()
    }, slideInterval);
    return () => clearInterval(interval);
  });


  const changeActivePromoSlide = () => {
    if (activeSlidePromo.elementIndex < promosMaxIndex) {
      setActiveSlidePromo({
        ...activeSlidePromo,
        elementIndex: activeSlidePromo.elementIndex + 1
      })
    } else if (activeSlidePromo.elementIndex === promosMaxIndex) {
      setActiveSlidePromo({
        ...activeSlidePromo,
        elementIndex: initialPromoIndex
      })
    }
  }

  return (
    <section className="main__promo promo">
      <PromoSlide promo={promos[activeSlidePromo.elementIndex]} />
    </section>
  )
}

export default Promo;