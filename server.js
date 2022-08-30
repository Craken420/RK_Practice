const http = require('http'),
    express = require('express'),
    app = express()
    
//create a server object:
const server = http.createServer(app)

server.listen(8080, function (req, res) {
    console.log('Server is running on http://localhost:8080'); //write a response to the client
}); //the server object listens on port 8080
