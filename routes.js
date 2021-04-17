const express = require('express')
const app = express()

const {
    paramNameRules,
    lifeExpectRules,
    bodyNameRules,
    validateRules,
    authCheck
} = require('./validators')


const RouteController = require('./routeController')

app.get('/:login', 
    RouteController.Login)

app.post('/:login',  
    RouteController.LoginPost)

app.get('/',
    RouteController.ShowAll)

app.get('/:breed',
    authCheck,
    RouteController.ShowOne)

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