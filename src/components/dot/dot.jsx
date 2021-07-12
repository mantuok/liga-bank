import React from 'react';
import classNames from 'classnames';

const Dot = (props) => {
  const {isActive} = props;

  const dotClass = classNames(`dots__dot`, {"dots__dot--active": isActive});

  return (
    <span className={dotClass}></span>
  )
};

export default Dot;