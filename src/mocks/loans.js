import {nanoid} from 'nanoid';

export const loans = [
  {
    id: nanoid(),
    type: `mortgage`,
    name: `Ипотечное кредитование`,
    minCost: 1200000,
    maxCost: 2500000,
    initialMin: 0.1,
    minMortgage: 500000,
    maternal: 470000,
    yearsMin: 5,
    yearsMax: 30
  },
  {
    id: nanoid(),
    type: `auto`,
    name: `Автомобильное кредитование`,
    minCost: 500000,
    maxCost: 5000000,
  }
]