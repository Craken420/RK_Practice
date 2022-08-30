const http = require('http')

//create a server object:
http.createServer().listen(function (req, res) {
    res.write('Server is running on http://localhost:8080'); //write a response to the client
    res.end(); //end the response
}, 8080); //the server object listens on port 8080