// Функция для проверки длины строки
const isLessOrEqual = (string, length) => string.length <= length;

isLessOrEqual('проверяемая строка', 20);

//Функция для проверки, является ли строка палиндромом
const isPalindrom = (string) => {
  const tempString = string
    .toLowerCase()
    .replaceAll(' ','');

  const reverseString = tempString
    .split('')
    .reverse()
    .join('');

  return tempString === reverseString;
};

isPalindrom('кекс');

//Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.

const findNumberInText = (string) => {
  const tempArr = string
    .replaceAll(' ','')
    .split('');
  const numbersArr = [];

  for (let i = 0; i < tempArr.length; i++) {
    if (!isNaN(tempArr[i])) {
      numbersArr.push(tempArr[i]);
    }
  }

  return numbersArr.join('');
};

findNumberInText('1 кефир, 0.5 батона');
findNumberInText('-1.5');


//Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины.

const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;

  if (actualPad <= 0) {
    return string;
  }

  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};

myPadStart('1', 4, '0');
