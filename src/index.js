const auth = require('./auth')

auth.getToken().then(token => console.log(token))