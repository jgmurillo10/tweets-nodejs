var express = require('express');
var router = express.Router();
var tweets = require('../data/tweets.json');
/*GET Tweets records*/
router.get('/', function (req,res,next) {
	// body... 
	res.setHeader('Content-Type', 'application/json');
	res.json(tweets);
});

module.exports = router;