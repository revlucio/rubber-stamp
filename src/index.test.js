const index = require('./index')

describe('init hello world test', () => {
  test('hello world', () => {
    expect(index).toBe('hello world')
  })
})