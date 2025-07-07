const express = require('express')
const app = express()
const port = 3000

app.get( '/', (req, res) =>{
    res.send("Hello Adit")
})

app.get( '/about', (req, res) =>{
    // res.send("Ini About")
    res.sendFile('./about.html', {root: __dirname})
})

app.get( '/contact', (req, res) =>{
    res.send("Ini contact")
})

app.use( '/', (req, res) =>{
    res.status(404)
    res.send("404")
})

app.listen(port, ()=>{
    console.log(`Sedang menjalankan di localHost ${port}`)
})