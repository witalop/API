const express = require('express')
const routes = express.Router()

const medicinesController = require('./controllers/medicinesContorller')

routes.get('/alldata', medicinesController.printAllData)

module.exports = routes