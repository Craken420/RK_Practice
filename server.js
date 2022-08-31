//modules
const cors = require('cors'),
    express = require('express'),
    logger = require('morgan'),
    path = require('path')

// activate the modules
    app = express()

//middleware
app.use(express.urlencoded({ extended: true}))  //parse URL body
app.use(cors()) //indicate any origins (domain, scheme, or port) to load resources
app.use(express.json()) //parse the incoming requests with JSON
app.use(logger('dev')) //Log the time and status of the response

//settings values
app.set('PORT', 8080)

//path's
app.get('/', function (req, res){
    res.sendFile(path.join(__dirname + '/index.html'))
})

//create a server object
app.listen(app.get('PORT'), function (req, res) {
    console.log(`Server is running on http://localhost:${app.get('PORT')}`); //write a response to the client
}); //run server on port 8080
