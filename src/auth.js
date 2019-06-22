const request = require('request')

const getToken = async () => {
  const response = await request.get('/token')
  return response.token
}

module.exports = { getToken }