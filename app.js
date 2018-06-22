var express = require('express')
var app = express()
var url = require('url');
var exec = require("child_process").exec

var server_dir = ""; //Directory where your .bat file is located. Example: C:\\Users\\Administrator\\Desktop\\FiveM\\
var server_file = ""; \\.bat file to start server. Example: server.bat

var key = "28416897878645928354";

app.get("/", function(request, response){ //root dir
    response.send("FiveM Communication API - Made by Koen1997#2008");
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

app.listen(82);
