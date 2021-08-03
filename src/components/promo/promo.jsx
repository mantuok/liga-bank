import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useSwipeable} from 'react-swipeable';
import {
  SLIDER_INTERVAL,
  SwipeEvent
} from '../../const';
import PromoSlide from '../promo-slide/promo-slide';
import Dots from '../dots/dots';

const Promo = () => {
  const promos = useSelector((state) => state.promos);
  const promosMaxIndex = promos.length - 1;
  const initialPromoIndex = 0;
  const dotsNumber = promos.length;

  const [activeSlidePromo, setActiveSlidePromo] = useState({
    elementIndex: initialPromoIndex
  });

  const swipeHandler = useSwipeable({
    onSwipedLeft: () => handleSwipe(SwipeEvent.SWIPE_TO_LEFT),
    onSwipedRight: () => handleSwipe(SwipeEvent.SWIPE_TO_RIGHT)
  });

  const getPromoClass = `main__promo promo main__promo--` + promos[activeSlidePromo.elementIndex].style

  useEffect(() => {
    const interval = setInterval(() => {
      increaseActivePromoSlide(SwipeEvent.INTERVAL)
    }, SLIDER_INTERVAL);
    return () => clearInterval(interval);
  });

  const decreaseActivePromoSlide = () => {
    if (activeSlidePromo.elementIndex > initialPromoIndex) {
      setActiveSlidePromo({
        ...activeSlidePromo,
        elementIndex: activeSlidePromo.elementIndex - 1
      })
    } else if (activeSlidePromo.elementIndex === initialPromoIndex) {
      setActiveSlidePromo({
        ...activeSlidePromo,
        elementIndex: promosMaxIndex
      })
    }
  };

  const increaseActivePromoSlide = () => {
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
  };

  const handleSwipe = (swipeType) => {
    switch (swipeType) {
      case SwipeEvent.SWIPE_TO_LEFT:
        return increaseActivePromoSlide(swipeType);
      case SwipeEvent.SWIPE_TO_RIGHT:
        return decreaseActivePromoSlide(swipeType);
      default:
        return
    }
  };

  return (
    <section 
      className={getPromoClass}
      {...swipeHandler}
    >
      <div className="promo__container">
        <PromoSlide promo={promos[activeSlidePromo.elementIndex]} />
        <Dots
          section={`promo`}
          activeIndex={activeSlidePromo.elementIndex}
          dotsNumber={dotsNumber}
        />
      </div>
    </section>
  )
};

export default Promo;