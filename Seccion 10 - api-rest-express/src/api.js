const express = require('express')

const app = express()

const port = 3000


//Esto es un endpoint
app.get('/api/', (req, res)=> {
    res.send('Hola mundo')
})

app.listen(port, ()=> {
    console.log(`El ejemplo de esta ejecutando en el pueerto ${port}`)
    console.log('Run in: http://localhost:3000/api')

})