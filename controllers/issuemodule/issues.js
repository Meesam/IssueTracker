var db=require('../../core/db');
var appconfig=require('../../appconfig');
var globalobj=require('../../core/global');
var util=require('util');

exports.getAllissues=function(callback){
	db.runSql('select * from IssueMaster',function(data,err){
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
}

exports.addIssue=function(issue,callback){
	if(issue==null){
       callback(null);
	}
	else{
		var sqlquery="Insert into IssueMaster(IssueTitle,StartDate,EndDate,IssuePriority,IssueType,Status,IsNotify, ";
		    sqlquery +="Description,CreateBy,Serverity,ProjectId)Values " ;
		    sqlquery +=util.format("('%s','%s','%s',%d,%d,%d,'%s','%s',%d,%d,%d)",issue.IssueTitle,issue.StartDate,
		    	issue.EndDate,issue.IssuePriority,issue.IssueType,issue.Status,issue.IsNotify,issue.Description,issue.CreateBy,
		    	issue.Serverity,issue.ProjectId);
		    db.runSql(sqlquery,function(data,err){
		    	if(err){
		    		callback(null);
		    	}
		    	else{
		    		var obj={
		    			status:'success',
		    			count:0,
		    			data:'successfully insert'
		    		}
		    		callback(globalobj.globalObject(obj));
		    	}
		    });
	}
}