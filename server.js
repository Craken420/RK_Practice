'use strict'
//modules
const createError = require('http-errors'),
    cors = require('cors'),
    express = require('express'),
    logger = require('morgan'),
    path = require('path'),

// activate the modules
    app = express(),
    router = require('express').Router(); // export routs used as middleware

//middleware
app.use(express.urlencoded({ extended: true})); //parse URL body
app.use(cors()); //indicate any origins (domain, scheme, or port) to load resources
app.use(express.json()); //parse the incoming requests with JSON
app.use(logger('dev')); //Log the time and status of the response

//settings values
app.set('PORT', 8080);

app.use(express.static('public'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

//path's
router.route('/').get(function (req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/', router);

//create a server object
app.listen(app.get('PORT'), function (req, res) {
    console.log(`Server is running on http://localhost:${app.get('PORT')}`); //write a response to the client
}); //run server on port 8080
