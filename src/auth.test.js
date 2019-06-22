const index = require('./auth')
const request = require('request')

jest.mock('request')

describe('auth', () => {
  test('get an auth token', async () => {
    request.get.mockResolvedValue({ token: 'something' })

    const token = await index.getToken('username', 'password')

    expect(token).toBe('something')
  })
})
