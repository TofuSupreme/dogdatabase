const {body, param, validationResult} = require('express-validator')

const paramNameRules = 
    param('breed')
        .notEmpty()
        .withMessage('Please enter a breed name')
        .isLength({min: 3})
        .withMessage('Please spell out the breed name')
        .trim()
        .escape()

const lifeExpectRules =
    body('age')
        .notEmpty()
        .withMessage('Please enter an age')
        .trim('')
        .escape('')

const bodyNameRules =
    body('breed','group', 'origin', 'size', 'energyLevel')
        .notEmpty()
        .withMessage('Do not leave this empty')
        .isLength({min: 2})
        .withMessage('This must be longer than two letters')
        .trim()
        .escape()

function validateRules(req, res, next) {
    const errors = validationResult(req)

    if(errors.isEmpty()) {
        return next()
    }

    console.log(errors)
    res.status(422).send('Uh oh! Something did not work!')
}

// function loginRules(req, res, next) {
//     if(req.body.currentUser && req.cookies.user_sid){
//         console.info('you are in!')
//         return next()
//     }
// }

module.exports = {
    paramNameRules,
    lifeExpectRules,
    bodyNameRules,
    validateRules, 
    // loginRules
}
