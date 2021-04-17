const mongoose = require('mongoose')
const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const app = express()
const { port } = require('./config')


const uri = 'mongodb+srv://atlasDB:atlasDB123@cluster0.lqjcz.mongodb.net/firstMongo?retryWrites=true&w=majority'

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({
    extended: true
}))

app.use(session({
    key: 'user_sid',
    secret: 'shibaTosa',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }
}))

function RoutesInfo(req, res, next) {
    console.info({
        method: req.method,
        url: req.url
    })
    
    next()
}

app.use(RoutesInfo)

const Routes = require('./routes')
app.use('/dogs', Routes)


app.listen(port, ()=>{
    console.log(`Howling in on http://localhost:${port}`)

    mongoose.connect(uri, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
})
