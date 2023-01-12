const express = require('express')
const mongoose = require('mongoose')




const app = express()

const port = 3000

mongoose.connect('mongodb+srv://CristhianLozano:CristhianLozano@cluster0.jbbh5fm.mongodb.net/api-db?retryWrites=true&w=majority')


//Esto es un endpoint
app.get('/api/', async(req, res)=> {
    const users = await Users.find()
    res.status(200)
    res.send(users)
})

app.listen(port, ()=> {
    console.log(`El ejemplo de esta ejecutando en el pueerto ${port}`)
    console.log('Run in: http://localhost:3000/api')

})