const sum = require('../ex1')
const myIndexOf = require('../ex2')
const myRemove = require('../ex4')

test('soma 1 e 2 para dar 3', () => {
  expect(sum(4, 5)).toBe(9)
  expect(sum(0, 0)).toBe(0)
  expect(() => sum(4, '5')).toThrow(new Error('parameters must be numbers'))
})

test('procura o index do elemento', () => {
  expect(myIndexOf([1, 2, 3, 4], 3)).toBe(2)
  expect(myIndexOf([1, 2, 3, 4], 5)).toBe(-1)
})

test('array retorna sem o elemento', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1,2,4])
})