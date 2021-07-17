import {nanoid} from 'nanoid';

export const loans = [
  {
    id: nanoid(),
    type: `mortgage`,
    name: `Ипотечное кредитование`,
    minCost: 1200000,
    maxCost: 25000000,
    initialPaymentMin: 10,
    initialPaymentMax: 100,
    minLoan: 500000,
    maternal: 470000,
    termMin: 5,
    termMax: 30
  },
  {
    id: nanoid(),
    type: `auto`,
    name: `Автомобильное кредитование`,
    minCost: 500000,
    maxCost: 5000000,
    initialPaymentMin: 10,
    initialPaymentMax: 100,
    minLoan: 200000,
    termMin: 1,
    termMax: 5
  }
]