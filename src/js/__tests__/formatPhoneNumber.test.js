import formatPhoneNumber from '../formatPhoneNumber';

describe('test function formatPhoneNumber', () => {
  describe('correct number', () => {
    const numbers = [
      ['123-45 67', '+78121234567'],
      ['8(888)8888888', '+78888888888'],
      ['+8 (888) 888 88 88', '+78888888888'],
      ['+7 (777) 777-77-77', '+77777777777'],
      ['999 9a 9a 9a 9a 9a 9a 9a', '+79999999999'],
      ['8600000 00 00 0', '+860000000000'],
      ['8600000 00 00 0', '+860000000000'],
    ];

    test.each(numbers)('%p', (number, reference) => {
      expect(formatPhoneNumber(number)).toBe(reference);
    });
  });

  describe('incorrect number', () => {
    const arr = new Array(9).fill('', 0, 10);
    const map = arr.map((item, index) => item + String(index * 10 ** index));
    const numbers = map.filter((number) => number.length !== 7);

    test.each(numbers)('%p', (number) => {
      expect(() => formatPhoneNumber(number)).toThrow('номер не корректен');
    });
  });
});
