var db=require('../../core/db');
var appconfig=require('../../appconfig');
var globalobj=require('../../core/global');
var util=require('util');

exports.getAllServerity=function(callback) {
	db.runSql('select * from  ServerityMaster' , function(data,err){
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
	})
}

exports.getServerityById=function(serverityId,callback) {
	if(serverityId==0 || serverityId==null)
		 callback(null,'inncorrect input');
	else{
        var sqlquery='select * from  ServerityMaster where SId= ' + serverityId;
		db.runSql(sqlquery , function(data,err){
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

exports.addServerity=function(serverity,callback){
  if(serverity==null)
  	  callback(null,'inncorrect input');
  	else{
      var sqlquery="Insert into ServerityMaster(ServerityName,Description)VALUES";
      sqlquery +=util.format("('%s','%s')",serverity.ServerityName,serverity.Description);
      db.runSql(sqlquery,function(data,err){
      	  if(err)
      	  	callback(null,err);
      	  else{
               var obj={
						status:'success',
						count:0,
						data:'Record Insert successfully'
					}
				callback(globalobj.globalObject(obj));
      	  }
      });
  	}
}