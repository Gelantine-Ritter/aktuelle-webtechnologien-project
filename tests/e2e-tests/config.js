require('dotenv').config()

const url = require('../../urls')
const env = process.env.TEST_ENV
const baseURL = url[env]
const nameOfCard = 'Badlands'

export { baseURL, nameOfCard }
