const path = require('path')
const express = require('express')
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

const app = express()
<<<<<<< HEAD
const port = process.env.PORT || 3000
=======
>>>>>>> a5b04e832100ce010a1ebe454808ad1a0553c3ab

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsDirectoryPath = path.join(__dirname, '../templates/views')
const partialsDirectoryPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engin and views location
app.set('view engine', 'hbs')
app.set('views', viewsDirectoryPath)
hbs.registerPartials(partialsDirectoryPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Ayush Jain',
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Ayush Jain',
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        message: "I'll provide content soon",
        name: 'Ayush Jain'
    })
})

app.get('/weather', (req, res) =>{
    if (!req.query.address) {
        return res.send({
            error: 'Please provide an address'
        })
    }
    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        
        if(error){
            return res.send({ error })
        }
        forecast(latitude, longitude, (error, forecastData) => {

            if(error){
                return res.send({ error })
            }
            res.send({
                location, 
                forecast: forecastData,
                address: req.query.address,

            })
        })
    })
})

app.get('/help/*', (req, res) =>{
    res.render('404', {
        title: '404',title: '404',
        message: "Help article not found",
        name: 'Ayush Jain'
    })
})

app.get('*', (req, res) =>{
    
    res.render('404', {
        title: '404',
        message: "Page not found",
        name: 'Ayush Jain'
    })
})

<<<<<<< HEAD
app.listen(port, () => {
    console.log('Server is up on port ' + port)
=======
app.listen(3000, () => {
    console.log('Server is up on port 3000')
>>>>>>> a5b04e832100ce010a1ebe454808ad1a0553c3ab
})