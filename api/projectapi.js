var express=require('express');
var db=require('../core/db');
var projects=require('../controllers/projectmodule/projects');
var apiRoutes = express.Router();


// Get all project list
apiRoutes.get('/project',function (req,resp,next) {
	projects.getAllProject(function(data,err){
		if(err)
			return next(err);
		else{
			resp.json(data);
		}
	});
});

/*
apiRoutes.get('/projects/:projectId',function(req,resp,next){
	projects.getProjectById(req.params.projectId,function(data,err){
		if(err)
			return next(err);
		else{
			resp.json(data);
		}
	});
});
*/

apiRoutes.post('/projects',function(req,resp,next){
	projects.addProject(req.body.Obj,function(data,err){
		if(err)
			return next(err);
		else{
			resp.json(data);
		}
	});
});

module.exports = apiRoutes;

