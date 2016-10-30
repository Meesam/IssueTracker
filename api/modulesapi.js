var express=require('express');
var db=require('../core/db');
var appModule=require('../controllers/appmodule/appmenu');
var apiRoutes = express.Router();

apiRoutes.get('/modules',function(req,resp,next){
  appModule.getAllModules(function(data,err){
     if(err){
       return next(err);
     }
     else{
       resp.json(data);
     }
  });
});

apiRoutes.get('/modulemenu/:id',function(req,resp,next){
  appModule.getMenubyId(req.params.id,function(data,err){
     if(err){
      return next(err);
     }
     else{
      resp.json(data);
     }
  });
});


module.exports = apiRoutes;