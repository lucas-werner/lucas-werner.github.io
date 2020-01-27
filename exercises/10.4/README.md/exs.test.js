const uppercase = require('./ex1')

describe('exercício 1', () => {
  test('vertificar callback está sendo chamada', () => {
    const callback = jest.fn()
    uppercase('lucas', callback)
    expect(callback).toHaveBeenCalled()
  })
});
