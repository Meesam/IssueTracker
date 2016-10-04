var appconfig=require('../../appconfig');
var globalobj=require('../../core/global');
var util=require('util');
var mongoose=require('mongoose');
var Projects = mongoose.model('Projects');

exports.getAllProject=function(aTableInfo,callback){
	var totalRecord=null;
	var perPage = aTableInfo.RPP
	 , page = Math.max(0, aTableInfo.CurPage);
	Projects.count({},function(err,data){
		if(err)
		totalRecord=0;
		else
			totalRecord=data;
	})

	Projects.find(function(err,data){
		if(err)
			callback(null,err);
		else {
		var	obj = {
				status: 'success',
		    	count:totalRecord,
			    data: data
			}
			callback(globalobj.globalObject(obj));
		}
	}).skip(perPage * (page-1)).limit(perPage).sort(aTableInfo.SortBy);
};

exports.addProject=function(projectdetails,callback){
  var project=new Projects({
	  ProjectName : projectdetails.ProjectName,
	  StartDate : projectdetails.StartDate,
	  EndDate : projectdetails.EndDate,
	  ProjectType : projectdetails.ProjectType,
	  Description : projectdetails.Description
  });
	project.save(function(err){
		if(err)
		callback(null,err);
		else{
			var obj={
				status:'success',
				count:0,
				data:'Record add successfully'
			}
			callback(globalobj.globalObject(obj));
		}
	});
};

exports.getProjectById=function(projectId,callback){
	if(projectId==0)
		callback(null,err);
	else{
		Projects.find({_id:projectId},function(err,data){
			if(err)
				callback(null,err);
			else{
				var	obj = {
					status: 'success',
					count:data.length,
					data: data
				}
				callback(globalobj.globalObject(obj));
			}
		})
	}
}


/*
exports.getAllPoject=function(callback){
	var sqlqury="select p.ProjectId,p.CreateDate,p.ProjectTitle,p.ProjectDescription,";
	sqlqury += "ISNULL(u.FirstName,'')+ ' ' + ISNULL(u.LastName, '')as CreatedBy from ProjectMaster p inner join Users u on p.CreateBy=u.UserId";
	db.runSql(sqlqury,function(data,err){
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

exports.addProject=function(project,callback){
   if(project==null){
   	callback(null,err);
   }
   else{
   	console.log(project);
   	var sqlqury="Insert into ProjectMaster(ProjectTitle,ProjectDescription,CreateBy) Values ";
   	sqlqury +=util.format("('%s','%s',%d)",project.ProjectTitle,project.ProjectDescription,project.CreateBy);
   	console.log(sqlqury);
   	db.runSql(sqlqury,function(err,data){
         if(err)
         	return err;
         else{
         	var obj={
					status:'success',
					count:0,
					data:'Record add successfully'
				}
				callback(globalobj.globalObject(obj));
         }
   	});
   }
}

exports.getProjectById=function(projectid,callback){
	if(projectid==0)
		return callback(null,err);
	else{
		var sqlqury="Select * from ProjectMaster where Projectid=" + projectid;
		db.runSql(sqlqury,function(data,err){
			if(err)
				return err;
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
}
*/

