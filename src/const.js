import {nanoid} from 'nanoid';

export const NavigationItem = {
  header: {
    Services: {
      ID: nanoid(),
      NAME: `Услуги`,
      LINK: `/page-not-found`
    },
    LoanCalculate: {
      ID: nanoid(),
      NAME: `Расчитать кредит`,
      LINK: `/page-not-found`
    },
    CurrencyCalculate: {
      ID: nanoid(),
      NAME: `Конвертер валют`,
      LINK: `/page-not-found`
    },
    Contacts: {
      ID: nanoid(),
      NAME: `Контакты`,
      LINK: `/page-not-found`
    }
  },
  footer: {
    Services: {
      ID: nanoid(),
      NAME: `Услуги`,
      LINK: `/page-not-found`
    },
    LoanCalculate: {
      ID: nanoid(),
      NAME: `Расчитать кредит`,
      LINK: `/page-not-found`
    },
    Contacts: {
      ID: nanoid(),
      NAME: `Контакты`,
      LINK: `/page-not-found`
    },
    Ask: {
      ID: nanoid(),
      NAME: `Задать вопрос`,
      LINK: `/page-not-found`
    }
  }
};