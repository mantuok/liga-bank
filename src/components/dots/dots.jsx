import React from 'react';
import {nanoid} from 'nanoid';
import Dot from '../dot/dot';

const Dots = (props) => {
  const {section, activeSlideIndex, dotsNumber} = props;

  const isDotActive = (dotIndex) => dotIndex === activeSlideIndex;

  const renderDots = () => {
    let dots = [];
    for (let i = 0; i < dotsNumber; i++) {
      dots.push(    
        <Dot 
          key={nanoid()}
          isActive={isDotActive(i)}
        />
      )
    }
    return dots;
  };

  return (
    <div className={section + `__dots dots`}>
      {renderDots()}
    </div>
  )
}

export default Dots;