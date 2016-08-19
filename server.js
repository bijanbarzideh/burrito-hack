var express = require('express'),
	app = express(),
	logger = require('morgan'),
	mongoose = require('mongoose')
	bodyParser = require('body-parser'),
	port = process.env.PORT || 3000,
	Routes = require('./routes/index.js');

mongoose.connect('mongodb://localhost/burritofy');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));

Routes(app);

app.listen(port, (err)=>{
	if(err){
		console.error(err)
	} else {
		console.log('Listening on port: ' + port);
	}
});
