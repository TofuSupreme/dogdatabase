const express = require('express')
const app = express()

const {
    paramNameRules,
    lifeExpectRules,
    bodyNameRules,
    validateRules,
    // loginRules
} = require('./validators')


const RouteController = require('./routeController')

app.get('/',
    // loginRules,
    RouteController.ShowAll)

app.get('/:login', RouteController.Login)

app.post('/:login', 
    // loginRules,    
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