export const getSeparatedNumber = (number) => number.toLocaleString('ru-RU');

export const getRubleSuffix = (number) => {
  const digitsArray = Array.from(String(number), Number);
  const lastDigit = digitsArray[digitsArray.length - 1]
  switch (lastDigit) {
    case 1:
      return ` рубль`;
    case 2:
      return ` рубля`;
    case 3:
      return ` рубля`;
    case 4:
      return ` рубля`;
    default:
      return ` рублей`
  }  
};

export const getYearSuffix = (years) => {
  const digitsArray = Array.from(String(years), Number);
  const lastDigit = digitsArray[digitsArray.length - 1];

  if ((years >= 11) && (years <= 14)){
    return ` лет`
  } else if (lastDigit === 1) {
    return ` год`;
  } else if ((lastDigit >= 2) && (lastDigit <= 4)) {
    return ` года`
  } else {
    return ` лет`
  }
};