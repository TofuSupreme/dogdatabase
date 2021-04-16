const express = require('express')
const app = express()

const {
    paramNameRules,
    lifeExpectRules,
    bodyNameRules,
    validateRules
} = require('./validators')

const RouteController = require('./routeController')

app.get('/', RouteController.ShowAll)

app.get('/:breed', RouteController.ShowOne)

app.post('/',
    bodyNameRules,
    lifeExpectRules,
    validateRules,
    RouteController.Create)

app.put('/:breed',
    paramNameRules,
    bodyNameRules,
    validateRules,
    RouteController.Update
)

app.delete(
    '/:breed',
    paramNameRules,
    validateRules,
    RouteController.Delete
)

module.exports = app