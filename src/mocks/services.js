import {nanoid} from 'nanoid';

export const services = [
  {
    id: nanoid(),
    name: `deposits`,
    tabName: `Вклады`,
    heading: `Вклады Лига Банка – это выгодная инвестиция в свое будущее`,
    points: [
      `Проценты по вкладам до 7%`,
      `Разнообразные условия`,
      `Возможность ежемесячной капитализации или вывод процентов на банковскую карту`
    ],
    description: ``,
    link: `Узнать подробнее`,
    directTo: `/page-not-found`,
    img: `../img/deposits-desktop.jpg`,
    alt: `Вклады банка`
  },
  {
    id: nanoid(),
    name: `loans`,
    tabName: `Кредиты`,
    heading: `Лига Банк выдает кредиты под любые цели`,
    points: [
      `Ипотечный кредит`,
      `Автокредит`,
      `Потребительский кредит`
    ],
    description: `Рассчитайте ежемесячный платеж и ставку по кредиту воспользовавшись нашим кредитным калькулятором`,
    link: ``,
    directTo: ``,
    img: `../img/loans-desktop.jpg`,
    alt: `Кредиты банка`
  },
  {
    id: nanoid(),
    name: `insurance`,
    tabName: `Страхование`,
    heading: `Лига Страхование — застрахуем все что захотите`,
    points: [
      `Автомобильное страхование`,
      `Страхование жизни и здоровья`,
      `Страхование недвижимости`
    ],
    description: ``,
    link: `Узнать подробнее`,
    directTo: `/page-not-found`,
    img: `../img/insurance-desktop.jpg`,
    alt: `Страховые услуги банка`
  },
  {
    id: nanoid(),
    name: `online`,
    tabName: `Онлайн-сервисы`,
    heading: `Лига Банк — это огромное количество онлайн-сервисов для вашего удобства`,
    points: [
      `Мобильный банк, который всегда под рукой`,
      `Приложение Лига-проездной позволит вам оплачивать билеты по всему миру`
    ],
    description: ``,
    link: `Узнать подробнее`,
    directTo: `/page-not-found`,
    img: `../img/online-desktop.jpg`,
    alt: `Онлайн-сервисы банка`
  }
]