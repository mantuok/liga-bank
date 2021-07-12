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
export const Viewport = {
  Desktop: {
    MIN: `1024px`
  },
  Tablet: {
    MIN: `768px`,
    MAX: `1023px`
  },
  Mobile: {
    MIN: `320px`,
    MAX: `767px`
  }
}

export const MenuButton = {
  Open: {
    TEXT: `Открыть меню`,
    CLASS: `header-navigation__open`
  },
  Close: {
    TEXT: `Закрыть меню`,
    CLASS: `header-navigation__close`
  }
};

export const Key = {
  ESC: 27
}

export const SLIDER_INTERVAL = 4000;

export const SliderEvent = {
  SWIPE_TO_LEFT: `toLeft`,
  SWIPE_TO_RIGHT: `toRight`,
  INTERVAL: `Interval`
}