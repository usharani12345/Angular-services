

app.provider("example",function(){
	var myObj={};
	myObj.fname="JohnGalt";
	myObj.lname="JohnGalt";
	myObj.fullName=function(){
		return this.fname+"" +this.lname;
	}
	this.$get=function(){
		return myObj;
	}
})

app.service("customService",function(){
	this.getCustomerDetails=function(){
		return "Inside Customer";
	}
})

app.config(["AppName",function(AppName){
	console.log("inside config constant");
}])

app.config(["exampleProvider",function(exampleProvider){
	console.log(exampleProvider.$get().fullName());
	console.log(exampleProvider.$get().fname);
}])

app.run(["AppVersion","AppName",function(AppVersion,AppName){
	console.log("inside config value");
	AppName="1.0.3";
	console.log("inside value value"+AppName);
}])

app.run(["customService",function(customServiceDetail){
	console.log(customServiceDetail.getCustomerDetails());
}])
app.run(["AppName",function(AppName){
	console.log("inside constant run method");
}])

app.factory("customFactory",function(){
	return "This is my factory service";
})

app.constant("AppName","Angular Application");
app.value("AppVersion","APP Version 1.0.1")