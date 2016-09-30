// Open db comment when use sql server
//var db=require('../../core/db');
var appconfig=require('../../appconfig');
var globalobj=require('../../core/global');
var util=require('util');
var mongoose=require('mongoose');
var Users = mongoose.model('Users');

/*
var Schema=mongoose.Schema;
mongoose.connect(appconfig.dbUrl);
var db=mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
	console.log("Connection succeeded.");
});
*/



// Add User
exports.createUsers=function(users,callback){
  if(users){
	  var user=new Users({
		  FirstName:users.FirstName,
		  MiddleName:users.MiddleName,
		  LastName:users.LastName,
		  UserName:users.UserName,
		  Password:users.Password,
		  Email:users.Email,
		  DOB:users.DOB,
		  LastLogin:users.LastLogin
	  });
	  user.save(function(err){
		  if(err)
			  callback(null,err);
		  else {
			  var obj={
				  status:'success',
				  count:data.length,
				  data:data
			  }
			  callback(globalobj.globalObject(obj));
		  }
	  });
   }

};

// Login
exports.doLogin=function(users,callback){
	if(users != null){
	  Users.find({usersName:users.usersName,Password:users.Password},function(err,data){
		 if(err)
		  callback(null,err);
		  else{
			 var obj={
				 status:'success',
				 count:data.length,
				 data:data,
				 tokenvalue:data[0].Email
			 }
			 callback(globalobj.globalObject(obj));
		 }
	  });
  }

};


// Get User by Email
exports.getUserByEmail=function(emailid,callback){
	if(emailid != null){
		Users.find({Email:emailid},function(err,data){
           if(err)
		    callback(null,err);
			else{
			   var obj={
				   status:'success',
				   count:data.length,
				   data:data
			   }
			   callback(globalobj.globalObject(obj));
		   }
		});
	}

};

// Get All Users
exports.getAllUsers=function(callback){
    Users.find({},function(err,data){
		if(err)
		 callback(null,err);
		else{
			var obj={
				status:'success',
				count:data.length,
				data:data
			}
			callback(globalobj.globalObject(obj));
		}
	});

};

