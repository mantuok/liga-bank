import {nanoid} from 'nanoid';

export const promos = [
  {
    id: nanoid(),
    heading: `Лига Банк`,
    image: `../img/cards-desktop.jpg`,
    alt: `Пример карт банка`,
    description: `Кредиты на любой случай`,
    style: `basic`,
    link: `Рассчитать кредит`,
    directTo: `/`
  },
  {
    id: nanoid(),
    heading: `Лига Банк`,
    image: `../img/man-desktop.jpg`,
    alt: `Клиент банка`,
    description: `Ваша уверенность в завтрашнем дне`,
    style: `contrast`,
    link: ``,
    directTo: ``
  },
  {
    id: nanoid(),
    heading: `Лига Банк`,
    image: `../img/woman-desktop.jpg`,
    alt: `Клиентка банка`,
    description: `Всегда рядом`,
    style: `contrast`,
    link: `Найти отделение`,
    directTo: `/`
  },
]