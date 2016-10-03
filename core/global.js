exports.globalObject=function(curObject) {
	console.log('cus object is ' + JSON.stringify(curObject));
	var globalObject={};
	if(curObject==null){
         return null;
	}
	else{
		var globalObject={
			Status:curObject.status,
			Count:curObject.count,
			objdata:curObject.data,
			token:curObject.tokenvalue
		}
		return globalObject;
	}

}