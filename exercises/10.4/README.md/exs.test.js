const functions = require('./ex1')


test('soma de dois elementos', () => {
  expect(functions.soma(3,4)).toBe(7)
});

test('criar usuário Werner', () => {
  expect(functions.createUser()).toEqual({ name : 'Lucas', lastName: 'Werner'})
})