const { validationResult } = require ('express-validator')

const Dogs = require('./dogModel')

class RouteController {

    static async Login (req, res){
        res.send('Welcome! Please Login!')
    }

    static async LoginPost (req, res){
        const username = req.body.username,
                password = req.body.password
    
        if(username === 'tofusupreme' && password === 'soundsdelicious'){
            console.log(`Welcome ${username}`)
            return res.redirect('/')
        }
        res.status(401).send()
    }
    
    static async ShowAll(req, res) {
    let result
    try {
        result = await Dogs.find({})
    } catch(error){
        console.error(error)
        return res.status(500).send
        ('Error')
    }
    res.send(result)   
    }

    static async ShowOne(req, res) {
        const breed = req.params.breed
    let showOne
    try {
        showOne = await Dogs.find({breed: breed})
    }catch(error){
        console.error(error)
        return res.status(500).send
        ('Unable to locate breed. Please try again')
    }
    res.send(showOne)
    }

    static async Create(req, res) {
        const breed = req.body.breed
        const group = req.body.group
        const size = req.body.size
        const origin = req.body.origin
        const lifeExpect = req.body.lifeExpect
        const energyLevel = req.body.energyLevel
        const goodWithKids = req.body.goodWithKids
        const hypoallo = req.body.hypoallo
    
    let result 
    try {
        const newDog = new Dogs({
            breed: breed, 
            group: group,
            size: size,
            origin: origin, 
            lifeExpect: lifeExpect,
            energyLevel: energyLevel,
            goodWithKids: goodWithKids,
            hypoallo: hypoallo, 
        })
        result = await newDog.save()
    } catch (error){
        console.error(error)
        return res.status(500).send('Error')
    }
    res.send(result)

    }

    static async Update(req, res){
        const bodyName = req.body.group
        const paramName = req.params.breed

        let result 
        try {
            result = await Dogs.findOneAndUpdate(
                {group: bodyName},
                {breed: paramName},
                {
                    new: true,
                    upsert: true
            }
        )
        } catch(error){
            console.error(error)
        }
        res.send(result) 
    }

    static async Delete(req, res) {
                const breed = req.params.breed

        let result
        try {
            result = await Dogs.findOneAndDelete
            ({breed: breed})
        } catch(error){
            console.error(error)
            return res.status(500).send('Error')
        }
        return res.status(204).send(`${breed} has been deleted`)
    }
}

module.exports = RouteController