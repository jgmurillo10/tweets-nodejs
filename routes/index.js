var express = require('express');
var router = express.Router();
var request = require('request');
var tweets = require('./../routes/tweets');


/* GET home page. */
router.get('/', function(req, res, next) {
	var fullURL=req.protocol + '://' + req.get('host') + req.originalUrl+'tweets';
	console.log(fullURL)
	request(fullURL , function(err, response, body){
		if(!err && response.statusCode == 200){
			var json=JSON.parse(body);
		}
		else{
			return res.sendStatus(500);
		}
		res.render('index', {title:'Tweets',objects:json});

	});
  });
router.get('/example',function(req,res,next){

	res.render('example', {title: 'Example'});
});

module.exports = router;
