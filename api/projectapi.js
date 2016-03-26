var express=require('express');
var projects=require('../controllers/projectmodule/projects');
var apiRoutes = express.Router();

apiRoutes.get('/project',function (req,resp,next) {
	projects.getAllPoject(function(data,err){
		if(err)
			return next(err);
		else{
			resp.json(data);
		}
	});
});

apiRoutes.get('/projects/:projectId',function(req,resp,next){
	projects.getProjectById(req.params.projectId,function(data,err){
		if(err)
			return next(err);
		else{
			resp.json(data);
		}
	});
});

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

