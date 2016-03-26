var db=require('../../core/db');
var appconfig=require('../../appconfig');
var globalobj=require('../../core/global');
var util=require('util');
var jwt = require('jwt-simple');



exports.doLogin=function(users,callback) {
	if(users){
		var sql='Select * from Users Where Email=';
		sql +=util.format("'%s'",users.Email);
		sql +='and Password=';
		sql +=util.format("'%s'",users.Password);
		db.runSql(sql,function(data,err){
			if(err){
				callback(null,err);
			}
			else{
		        /*var token = jwt.encode({
                	email:data.Email,
                	name:data.FirstName,
                	exp:14000
                }, appconfig.secretkey);*/
              
              if(data.length > 0){
				var obj={
					status:'success',
					count:data.length,
					data:data,
					tokenvalue:data[0].Email
				}
				callback(globalobj.globalObject(obj));
			}
			else{
				var obj={
					status:'loginfail',
					count:data.length,
					data:null,
					tokenvalue:null
				}
				callback(globalobj.globalObject(obj));
			}	
		}
	});
}
	else{
		callback(null,'input is not valid');
	}
};

exports.getAllUsers=function(callback){
	db.runSql('Select * from Users',function(data,err){
		if(err){
			callback(null,err);
		}
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

exports.getUseryEmail=function(emailid,callback){
	var sqlquery="Select * from Users Where Email=";
	sqlquery +=util.format("'%s'",emailid.UserToken);
	db.runSql(sqlquery,function(data,err){
		if(err){
			callback(null,err);
		}
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