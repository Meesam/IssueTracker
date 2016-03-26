var db=require('../../core/db');
var globalobj=require('../../core/global');
var util=require('util');

exports.getAllModules=function(callback){
	db.runSql('Select * from Modules',function(data,err){
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

exports.getMenubyId=function(moduleId,callback){
   var query='select mm.MenuId, m.MenuName,m.Route from ModuleMenu mm' ;
     query += ' inner join Menus m on m.MenuId=mm.MenuId inner join Modules mo on mo.ModuleId=mm.ModuleId where mo.ModuleId=' + moduleId; 
	 
   db.runSql(query,function(data,err){
   	  if(err){
   	  	callback(null,err);
   	  }
   	  else{
   	  	var obj={
   	  		status:'success',
			count:data.length,
			data:data
   	  	};
   	  	callback(globalobj.globalObject(obj));
   	  }
   });
};

