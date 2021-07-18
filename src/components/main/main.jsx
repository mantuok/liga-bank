import React from 'react';
import Promo from '../promo/promo';
import Services from '../services/services';
import Calculator from '../calculator/calculator';
// import Branches from '../branches/branches';

const Main = () => {
  return (
    <main className="page__main Main">
      <Promo />
      <Services />
      <Calculator />
      {/* <Branches /> */}
    </main>
  )
}

export default Main;