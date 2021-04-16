const mongoose = require('mongoose')


const DogSchema = mongoose.Schema({
    breed: String,
    group: String,
    size: String,
    origin: String,
    lifeExpect: Number,
    energyLevel: String,
    goodWithKids: Boolean,
    hypoallo: Boolean,
    
})

const DogsModel = mongoose.model('dogs', DogSchema)

module.exports = DogsModel