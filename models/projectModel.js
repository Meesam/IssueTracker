var mongoose = require( 'mongoose' );

var projectSchema=new mongoose.Schema({
  ProjectName:{type:String,required:true},
  StartDate:Date,
  EndDate:Date,
  ProjectType:{type:String,required:true},
  Description:{type:String, required:true},
});

module.exporst=mongoose.model('Projects',projectSchema);