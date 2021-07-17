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
};

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
};

export const SLIDER_INTERVAL = 4000;

export const SwipeEvent = {
  SWIPE_TO_LEFT: `toLeft`,
  SWIPE_TO_RIGHT: `toRight`,
  INTERVAL: `Interval`
};

export const LoanType = {
  AUTO: `auto`,
  MORTGAGE: `mortgage`
};

export const LoanMeta = {
  mortgage: {
    TYPE: `mortgage`,
    COST_AMOUNT_LABEL: `Стоимость недвижимости`,
    COST_STEP: 100000,
    INITIAL_PAYMENT_LABEL: `Первоначальный взнос`,
    INITIAL_PAYMENT_STEP: 5,
    TERM_LABEL: `Срок кредитования`,
    TERM_STEP: 1
  },
  auto: {
    TYPE: `auto`,
    COST_AMOUNT_LABEL: `Стоимость автомобиля`,
    COST_STEP: 50000,
    INITIAL_PAYMENT_LABEL: `Первоначальный взнос`,
    INITIAL_PAYMENT_STEP: 0.05,
    TERM_LABEL: `Срок кредитования`,
    TERM_STEP: 1
  }
};

export const InputError = {
  TEXT: `Некорректное значение`,
  CLASS: `--invalid`
};

export const InputButtonType = {
  PLUS: `plus`,
  MINUS: `minus`
};
