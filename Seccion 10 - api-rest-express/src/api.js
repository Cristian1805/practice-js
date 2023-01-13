const express = require('express')
const mongoose = require('mongoose')

const user = require('./users.handler')




const app = express()

const port = 3000

mongoose.connect('mongodb+srv://CristhianLozano:CristhianLozano@cluster0.jbbh5fm.mongodb.net/api-db?retryWrites=true&w=majority')


//Esto es un endpoint
app.get('/api/', user.list) 

app.listen(port, ()=> {
    console.log(`El ejemplo se esta ejecutando en el puerto ${port}`)
    console.log('Run in: http://localhost:3000/api')

})