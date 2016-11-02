var mssql=require('mssql');
var appconfig=require('../appconfig');
var mongoose=require('mongoose');

// Build the connection string
var dbURI = appconfig.dbUrl;

// Create the database connection
mongoose.connect(dbURI);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
	console.log('Mongoose default connection open to ' + dbURI);
});

// If the connection throws an error
mongoose.connection.on('error',function (err) {
	console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
	console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
	mongoose.connection.close(function () {
		console.log('Mongoose default connection disconnected through app termination');
		process.exit(0);
	});
});

require('../models/userModel');
require('../models/appMenuModel');
require('../models/projectModel');
require('../models/userDetailModel');


/* This method will work with Sql Server
exports.runSql=function(sqlqury,callback) {
	var conn=new mssql.Connection(appconfig.dbconfig);
	conn.connect(function(err){
		if(err){
           callback(null,err);
		}
		var sqlrequest=new mssql.Request(conn);
		sqlrequest.query(sqlqury,function(err,recordset){
             if(err){
                callback(null,err);  	
             }
             else{
             	callback(recordset);  	
             }
		});

	});
}*/

