import react from 'react';
import Slider from '../slider/slider';
import Promo from '../promo/promo';
import Calculator from '../calculator/calculator';
import Branches from '../branches/branches';

const Main = () => {
  return (
    <main className="page__main Main">
      <Slider />
      <Promo />
      <Calculator />
      <Branches />
    </main>
  )
}

export default Main;