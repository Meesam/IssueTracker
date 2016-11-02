var express=require('express');
var db=require('../core/db');
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
  if(token.UserToken){
     usersModule.getUserByEmail(token.UserToken,function(data,err){
       if(err)
         return next(err);
       else{
        resp.json(data);
      }
     })
  }
});

apiRoutes.post('/userDetails',function (req,resp,next) {
   console.log(req.body.Obj);
    usersModule.addUserDetails(req.body.Obj,function(data,err){
     if(err) return next(err);
     else resp.json(data);
    });
})

module.exports = apiRoutes;
