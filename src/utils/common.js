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
}