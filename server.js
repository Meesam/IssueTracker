var express=require('express');
var bodyParser=require('body-parser');
var appconfig=require('./appconfig');
var path=require('path');
var userapi=require('./api/userapi');
var moduleapi=require('./api/modulesapi');
var issueapi=require('./api/issueapi');
var issuetypeapi=require('./api/issuetypeapi');
var statusapi=require('./api/statusapi');
var projectapi=require('./api/projectapi');
var cookieparser=require('cookie-parser');
var jwt = require('jwt-simple');

// app configuration
var app=express();
var apiRoutes = express.Router();

// use middleware
app.use(express.static(path.join(__dirname+'/public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieparser());

// define routing

// public api routing middleware

app.use('/api', apiRoutes);

//user routing middleware
app.use('/api', userapi);

//application module routing middleware
app.use('/api', moduleapi);

//project routing middleware
app.use('/api', projectapi);

//issue routing middleware
app.use('/api', issueapi);

//issuetype routing middleware
app.use('/api', issuetypeapi);

//status routing middleware
app.use('/api', statusapi);

app.route('/*').get(function(req, res) { 
    return res.sendFile(path.join(__dirname+'/public/index.html')); 
});



// this is for run  server on localhost
app.listen(appconfig.webPort,function() {
   console.log('server runing at ' + appconfig.webPort);
});
