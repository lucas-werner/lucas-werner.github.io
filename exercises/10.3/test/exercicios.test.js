const sum = require('../ex1')

test('soma 1 e 2 para dar 3', () => {
  expect(sum(4, 5)).toBe(9)
  expect(sum(0, 0)).toBe(0)
  expect(() => sum(4, '5')).toThrow(new Error('parameters must be numbers'))
})