var db=require('../../core/db');
var appconfig=require('../../appconfig');
var globalobj=require('../../core/global');
var util=require('util');

exports.getAllStatus=function(callback) {
  db.runSql('Select * from StatusMaster',function(data,err){
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

exports.getStatusById=function(statusid,callback) {
	if(statusid==0 || statusid==null)
		callback(null,err);
	else{
		db.runSql('Select * from StatusMaster Where StatusId = ' + statusid,function(data,err){
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
}

exports.addStatus=function(status,callback){
	if(status==null)
		callback(null,err);
	else{
		var sqlquery="Insert into StatusMaster(StatusName,Description)Values";
		sqlquery +=util.format("('%s','%s')",status.StatusName,status.Description);
		db.runSql(sqlquery,function(data,err){
			if(err)
				callback(null,err);
			else{
				var obj={
					status:'success',
					count:0,
					data:'Record insert successfully'
				}
			callback(globalobj.globalObject(obj));
			}
		});
	}
}