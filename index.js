const mongoose = require('mongoose')
const express = require('express')
const app = express()
const { port } = require('./config')


const uri = 'mongodb+srv://atlasDB:atlasDB123@cluster0.lqjcz.mongodb.net/firstMongo?retryWrites=true&w=majority'

app.use(express.json())
app.use(express.urlencoded({
    extended: true
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




// const DogSchema = mongoose.Schema({
//     breed: String,
//     group: String,
//     size: String,
//     origin: String,
//     lifeExpect: Number,
//     energyLevel: String,
//     goodWithKids: Boolean,
//     hypoallo: Boolean,
    
// })

// const Dogs = mongoose.model('dogs', DogSchema)

// app.get('/dogs', async(req,res) => {

//     let result
//     try {
//         result = await Dogs.find({})
//     } catch(error){
//         console.error(error)
//         return res.status(500).send
//         ('Error')
//     }
//     res.send(result)
// })

// app.get('/dogs/:breed', async(req,res) => {

//     const breed = req.params.breed
//     let showOne
//     try {
//         showOne = await Dogs.find({breed: breed})
//     }catch(error){
//         console.error(error)
//         return res.status(500).send
//         ('Unable to locate breed. Please try again')
//     }
//     res.send(showOne)
// })

// app.post('/dogs', async(req, res) => {
//     const breed = req.body.breed
//     const group = req.body.group
//     const size = req.body.size
//     const origin = req.body.origin
//     const lifeExpect = req.body.lifeExpect
//     const energyLevel = req.body.energyLevel
//     const goodWithKids = req.body.goodWithKids
//     const hypoallo = req.body.hypoallo
    
//     let result 
//     try {
//         const newDog = new Dogs({
//             breed: breed, 
//             group: group,
//             size: size,
//             origin: origin, 
//             lifeExpect: lifeExpect,
//             energyLevel: energyLevel,
//             goodWithKids: goodWithKids,
//             hypoallo: hypoallo, 
//         })
//         result = await newDog.save()
//     } catch (error){
//         console.error(error)
//         return res.status(500).send('Error')
//     }
//     res.send(result)
// })
//Find out how to update and change various types of information. 
// app.put(
//     '/dogs/:breed',
//     async(req, res) => {
//         const bodyName = req.body.group
//         const paramName = req.params.breed

//         let result 
//         try {
//             result = await Dogs.findOneAndUpdate(
//                 {group: bodyName},
//                 {breed: paramName},
//                 {
//                     new: true,
//                     upsert: true
//             }
//         )
//         } catch(error){
//             console.error(error)
//         }
//         res.send(result)
//     }
// )

// app.delete(
//     '/dogs/:breed',
//     async(req, res)=>{
//         const breed = req.params.breed

//         let result
//         try {
//             result = await Dogs.findOneAndDelete
//             ({breed: breed})
//         } catch(error){
//             console.error(error)
//             return res.status(500).send('Error')
//         }
//         return res.status(204).send(`${breed} has been deleted`)
//     }
// )
