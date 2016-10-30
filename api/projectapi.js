var express=require('express');
var db=require('../core/db');
var projects=require('../controllers/projectmodule/projects');
var apiRoutes = express.Router();


// Get all project list
apiRoutes.post('/project',function (req,resp,next) {
	projects.getAllProject(req.body,function(data,err){
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


apiRoutes.post('/projects/add',function(req,resp,next){
	projects.addProject(req.body.Obj,function(data,err){
		if(err)
			return next(err);
		else{
			resp.json(data);
		}
	});
});

module.exports = apiRoutes;

