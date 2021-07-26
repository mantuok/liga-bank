import {nanoid} from 'nanoid';

export const promos = [
  {
    id: nanoid(),
    heading: `Лига Банк`,
    imageDesktop: `../img/cards-desktop.jpg`,
    imageTablet: `../img/cards-tablet.jpg`,
    imageMobile: `../img/cards-mobile.jpg`,
    alt: `Пример карт банка`,
    description: `Кредиты на любой случай`,
    style: `basic`,
    link: `Рассчитать кредит`,
    directTo: `/#calculator`
  },
  {
    id: nanoid(),
    heading: `Лига Банк`,
    imageDesktop: `../img/man-desktop.jpg`,
    imageTablet: `../img/man-tablet.jpg`,
    imageMobile: `../img/man-mobile.jpg`,
    alt: `Клиент банка`,
    description: `Ваша уверенность в завтрашнем дне`,
    style: `contrast`,
    link: ``,
    directTo: ``
  },
  {
    id: nanoid(),
    heading: `Лига Банк`,
    imageDesktop: `../img/woman-desktop.jpg`,
    imageTablet: `../img/woman-tablet.jpg`,
    imageMobile: `../img/woman-mobile.jpg`,
    alt: `Клиентка банка`,
    description: `Всегда рядом`,
    style: `contrast`,
    link: `Найти отделение`,
    directTo: `/#branches`
  },
] 