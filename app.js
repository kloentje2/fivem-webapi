var express = require('express')
var app = express()
var url = require('url');
var exec = require("child_process").exec

var server_dir = "C:\\path\\to\\server\\directory\\";
var server_file = "server.bat";

var key = "123456";
var port = 82;

app.get("/", function(request, response){ //root dir
    response.send("FiveM Communication API - Made by Koen1997#2008<hr><a href='/restart'>Restart</a><br><a href='/restart'>Stop</a><br><a href='/restart'>Start</a>");
});

app.get("/restart", function(request, response){ //root dir
	var url_parts = url.parse(request.url, true);
	var query = url_parts.query;
    if (query['key'] === key) {
		exec("taskkill /IM fxserver.exe /f", (error, stdout, stderr) => { 
			exec("cd "+server_dir+" && start "+server_file, (error, stdout, stderr) => { 
				console.log(error);
			})
		})
		response.send("done");
	} else {
		response.statusCode = 401;
		response.send("401 Unauthorized");
	}
});

app.get("/start", function(request, response){ //root dir
	var url_parts = url.parse(request.url, true);
	var query = url_parts.query;
    if (query['key'] === key) {
	exec("cd "+server_dir+" && start "+server_file, (error, stdout, stderr) => { 
		console.log(error);
	})
	response.send("done");
	} else {
		response.statusCode = 401;
		response.send("401 Unauthorized");
	}
});

app.get("/stop", function(request, response){ //root dir
	var url_parts = url.parse(request.url, true);
	var query = url_parts.query;
    if (query['key'] === key) {
		exec("taskkill /IM fxserver.exe /f", (error, stdout, stderr) => { 	
			console.log(error);
		})
		response.send("done");
	} else {
		response.statusCode = 401;
		response.send("401 Unauthorized");
	}
});

app.listen(port);
console.log("Running on port "+ port);
