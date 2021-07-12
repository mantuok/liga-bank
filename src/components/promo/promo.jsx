import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useSwipeable} from 'react-swipeable';
import {nanoid} from 'nanoid';
import {
  SLIDER_INTERVAL,
  SliderEvent
} from '../../const';
import PromoSlide from '../promo-slide/promo-slide';
import Dot from '../dot/dot';

const Promo = () => {
  const promos = useSelector((state) => state.promos);
  const promosMaxIndex = promos.length - 1;
  const initialPromoIndex = 0;
  const dotsNumber = promos.length;

  const [activeSlidePromo, setActiveSlidePromo] = useState({
    elementIndex: initialPromoIndex
  });

  const swipeHandler = useSwipeable({
    onSwipedLeft: () => handleSwipe(SliderEvent.SWIPE_TO_LEFT),
    onSwipedRight: () => handleSwipe(SliderEvent.SWIPE_TO_RIGHT)
  })

  useEffect(() => {
    const interval = setInterval(() => {
      increaseActivePromoSlide(SliderEvent.INTERVAL)
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

  const isDotActive = (dotIndex) => dotIndex === activeSlidePromo.elementIndex;

  const renderDots = () => {
    let dots = [];
    for (let i = 0; i < dotsNumber; i++) {
      console.log(isDotActive(i))
      dots.push(    
        <Dot 
          key={nanoid()}
          isActive={isDotActive(i)}
        />
      )
    }
    return dots;
  };

  const handleSwipe = (swipeType) => {
    switch (swipeType) {
      case SliderEvent.SWIPE_TO_LEFT:
        return increaseActivePromoSlide(swipeType);
      case SliderEvent.SWIPE_TO_RIGHT:
        return decreaseActivePromoSlide(swipeType);
    }
  };

  return (
    <section 
      className="main__promo promo"
      {...swipeHandler}
    >
      <PromoSlide promo={promos[activeSlidePromo.elementIndex]} />
      <div className="promo__dots dots">
        {renderDots()}
      </div>
    </section>
  )
};

export default Promo;