var express = require('express');
var request = require('request');
var Client = require('node-rest-client').Client;
//var bodyParser = require('body-parser');
//var path = require('path');


//configure app

var app = express();
app.set('port', (process.env.PORT || 5000));

 app.get('/', function(req, res){
 	//res.send({"Name":"hello, express!}");
 	
 	res.send("	Hello AWS MySQL!\n The Count of gumballs is:  1000\n The Gumball Machine Model is:  M102988 \r The Gumball Machine Serial # is:  1234998871109");

 	//res.render('pages/index');
 });


/*
app.get('/', function(req, res){

        request('http://52.53.239.54:5000/', function (error, response, body) {
        //var info = JSON.parse(body);
        //var originalUrl = info.url;
        console.log(body); 
		res.send(body);
        //if (info.result) {www
        //    request('http://team11-806135878.us-east-1.elb.amazonaws.com/' + url, null);
        //    res.redirect(originalUrl);
       // }else {
       //     //original URL not found
       //     console.log(__dirname + '/404.html');
        //    res.sendFile(path.join(__dirname + '/404.html'));
       // }
    });
	
});
*/
/*
app.get('/', function(req, res){



      
		var client = new Client();
		client.get('http://ec2-54-67-38-168.us-west-1.compute.amazonaws.com:5000/',function(data, response_raw){
                    console.log(data);
                    console.log(typeof data)
                    console.log(data[0].Name);
					var info = JSON.parse(data);
					console.log(info.Name);
					//console.log(data.Name);
                    //count = data.countGumballs
                   // console.log( "count = " + count ) ;
                   // var msg =   "\n\nMighty Gumball, Inc.\n\nNodeJS-Enabled Standing Gumball\nModel# " + 
                     //           data.modelNumber + "\n" +
                     //           "Serial# " + data.serialNumber + "\n" ;
                   // var html_body = "" + body ;
                    //var html_body = html_body.replace("{message}", msg );
                    //var html_body = html_body.replace(/id="state".*value=".*"/, "id=\"state\" value=\""+state+"\"") ;
                    res.end(info.Name);
            });
			*/
			
	/*	
        request('http://ec2-52-53-232-218.us-west-1.compute.amazonaws.com:5000/', function (error, response, body) {
        var info = JSON.parse(body);
        //var originalUrl = info.url;
        console.log(info); 
		res.send(body);
		
        //if (info.result) {
        //    request('http://team11-806135878.us-east-1.elb.amazonaws.com/' + url, null);
         //   res.redirect(originalUrl);
        //}else {
        //    //original URL not found
        //    console.log(__dirname + '/404.html');
        //    res.sendFile(path.join(__dirname + '/404.html'));
       // }
		
	})
   */
	

//});





//start the server
app.listen(app.get('port'), function(){
	console.log('Node app is running on port', app.get('port'));
});