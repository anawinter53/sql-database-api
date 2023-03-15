require('dotenv').config()

const api = require('./api')

api.listen(process.env.PORT, () => {
    console.log(`Wrongs API is on port ${process.env.PORT}`)
})


