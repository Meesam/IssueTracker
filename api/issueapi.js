var express=require('express');
var issues=require('../controllers/issuemodule/issues');
var apiRoutes = express.Router();

apiRoutes.get('/issues',function(req,resp,next) {

	issues.getAllissues(function(data,err){
		if(err)
			return next(err);
		else{
			resp.json(data);
		}
	});
});

apiRoutes.post('/issues',function(req,resp,next){
	issues.addIssue(req.body,function(data,err){
		if(err)
			return next(err);
		else{
			resp.json(data);
		}
	});
});


module.exports = apiRoutes;