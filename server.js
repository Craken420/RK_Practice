//modules
const cors = require('cors'),
    express = require('express'),
    logger = require('morgan'),

// activate the modules
    app = express()

//middleware
app.use(express.urlencoded({ extended: true}))  //parse URL body
app.use(cors()) //indicate any origins (domain, scheme, or port) to load resources
app.use(express.json()) //parse the incoming requests with JSON
app.use(logger('dev')) //Log the time and status of the response

//create a server object
app.listen(8080, function (req, res) {
    console.log('Server is running on http://localhost:8080'); //write a response to the client
}); //run server on port 8080
