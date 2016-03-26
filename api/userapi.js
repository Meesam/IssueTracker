var express=require('express');
var usersModule=require('../controllers/userModule/users');
var apiRoutes = express.Router();

apiRoutes.post('/login',function(req,resp,next){
	var users=req.body;
	if(users){
       usersModule.doLogin(users,function(data,err){
           if(err){
           	  return next(err);
           }
           else{
              if(data.Status=="loginfail")
              	return next(new Error("Login Fail"));
              resp.json(data); 
           }
       });
	}
});


apiRoutes.get('/userfromtoken',function(req,resp,next){
  var token =req.cookies;
  if(token){
     usersModule.getUseryEmail(token,function(data,err){
       if(err)
         return next(err);
       else{
        resp.json(data);
      }
     })
  }
});
module.exports = apiRoutes;
