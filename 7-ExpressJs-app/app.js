const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(expressLayouts)


app.use(express.static('public'))

app.get( '/', (req, res) =>{
    const mahasiswa = [
    {
        nama: 'Aditya Rahman Syach',
        email: 'aditya@gmail.com'
    },
    {
        nama: 'Ilyasa Sidra Thoriq',
        email: 'Arap@gmail.com'    
    },
    {
        nama: 'Ahmad Ipul',
        email: 'Ahmad@gmail.com'    
    },
    ]
    res.render('index' , {
        layout: 'layouts/main-layouts',
        title: 'Halaman utama',
        nama: 'Adityarns_',
        mahasiswa 
    } )    
    
})

app.get( '/about', (req, res) =>{
    res.render('about', {
        layout: 'layouts/main-layouts',
        title: 'Halaman About'})    
})

app.get( '/contact', (req, res) =>{
    res.render('contact', {
        layout: 'layouts/main-layouts',        
        title: 'Halaman Contact'})    
})

app.use( '/', (req, res) =>{
    res.status(404)
    res.send("404")
})

app.listen(port, ()=>{
    console.log(`Sedang menjalankan di localHost ${port}`)
})