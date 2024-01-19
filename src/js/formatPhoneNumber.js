/**
 * функция принимает телефонный номер,
 * форматирует и возвращает его в корректном виде
 *
 * @param {string} phoneNumber телефонный номер
 * @throws {Error} если переданный номер не корректен
 * @returns {number} отформатированный телефонный номер
 */
export default function formatPhoneNumber(phoneNumber) {
  let cleanedNumber = getNumbers(phoneNumber);

  return '+' + getCorrectNumber(cleanedNumber);
}

const getNumbers = (phoneNumber) => {
  return phoneNumber.replace(/[\D\s_]/g, '');
};

const getCorrectNumber = (number) => {
  if (number.length > 11) return number;

  checkNumbersLength(number);

  return getCorrectLengthNumber(number);
};

const checkNumbersLength = (number) => {
  const allowedLengths = [7, 10, 11];

  if (!allowedLengths.includes(number.length)) {
    throw new Error('номер не корректен');
  }
};

const getCorrectLengthNumber = (number) => {
  const length = number.length;

  return length < 11
    ? '7812'.slice(0, 11 - length) + number
    : number.replace(/^8/, '7');
};
