const express = require('express')
const app = express()

const {
    paramNameRules,
    lifeExpectRules,
    bodyNameRules,
    validateRules,
    authCheck,
    authVerified
} = require('./validators')


const RouteController = require('./routeController')

// app.get('/',
//     authCheck,
//     authVerified,
//     RouteController.ShowAll)

app.get('/', 
    authCheck,
    authVerified,
    RouteController.Login)

app.post('/:login', 
    authCheck,
    authVerified,   
    RouteController.LoginPost)

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