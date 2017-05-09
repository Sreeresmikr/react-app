var express  = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.post('/login',function(req,res){
	console.log(req.body);
	var username = req.body.username;
	var password = req.body.password;
	if (username=="DatafromDatabase") {
		if (password=="DatafromDatabase") {
			res.send("Sucessful");
		}
		else{
			res.send("password Wrong");
		}
	}
	else{
		res.send("username not exist");
	}
})

app.listen(3000,function(){
	console.log("Server started at port 3000");
})
