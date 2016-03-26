var mssql=require('mssql');
var appconfig=require('../appconfig');

exports.runSql=function(sqlqury,callback) {
	var conn=new mssql.Connection(appconfig.dbconfig);
	conn.connect(function(err){
		if(err){
           callback(null,err);
		}
		var sqlrequest=new mssql.Request(conn);
		sqlrequest.query(sqlqury,function(err,recordset){
             if(err){
                callback(null,err);  	
             }
             else{
             	callback(recordset);  	
             }
		});

	});
}