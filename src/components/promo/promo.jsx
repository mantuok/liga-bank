import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useSwipeable} from 'react-swipeable';
import {
  SLIDER_INTERVAL,
  SliderEvent
} from '../../const';
import PromoSlide from '../promo-slide/promo-slide';

const Promo = () => {
  const promos = useSelector((state) => state.promos);
  const promosMaxIndex = promos.length - 1;
  const initialPromoIndex = 0;

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

  const handleSwipe = (swipeType) => {
    switch (swipeType) {
      case SliderEvent.SWIPE_TO_LEFT:
        return increaseActivePromoSlide(swipeType);
      case SliderEvent.SWIPE_TO_RIGHT:
        return decreaseActivePromoSlide(swipeType);
    }
  };

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

  return (
    <section 
      className="main__promo promo"
      {...swipeHandler}
    >
      <PromoSlide promo={promos[activeSlidePromo.elementIndex]} />
    </section>
  )
}

export default Promo;