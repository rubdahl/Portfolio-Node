var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

// GET home page
router.get('/', function(req, res, next) {
let data = fs.readFileSync(path.resolve(__dirname, "../data/recommendations.json"));
res.render('recommendations', { data: JSON.parse(data)});
});

module.exports =  router;