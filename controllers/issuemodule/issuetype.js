var db=require('../../core/db');
var appconfig=require('../../appconfig');
var globalobj=require('../../core/global');
var util=require('util');

exports.getallIssuetype=function(callback) {
	db.runSql('Select * from IssueTypeMaster',function(data,err){
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

exports.getIssuetypeById=function(issuetypeid,callback){
	if(issuetypeid==0 || issuetypeid==null)
		callback(null,err);
	else{
		db.runSql('Select * from IssueTypeMaster where TypeId= ' + issuetypeid,function(data,err){
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

exports.addIssuetype=function(issuetype,callback){
	if(issuetype==null)
		callback(null,err);
	else{
		var sqlquery="Insert Into IssueTypeMaster(TypeName,Description)Values";
		sqlquery +=util.format("('%s','%s')",issuetype.TypeName,issuetype.Description);
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
		})
	}
}