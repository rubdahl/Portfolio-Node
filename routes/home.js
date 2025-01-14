var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const fs = require("fs")
const path = require("path")

/* GET home page. */
router.get('/', function(req, res, next) {
  let data = fs.readFileSync(path.resolve(__dirname, "../data/introductionArray.json"));
  res.render('home', { array: JSON.parse(data)});
});

router.post('/', jsonParser, function(req, res) {
    let array = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data/introductionArray.json")));
    const newArray = array.concat([req.body.newText])
    fs.writeFileSync(path.resolve(__dirname, "../data/introductionArray.json"), JSON.stringify(newArray));
    res.json({message: 'Item added', newArray: newArray});
});

router.delete('/', jsonParser, function(req, res) {
  let array = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data/introductionArray.json")));
  const newArray = array.filter(item => item !== req.body.removeText);
  fs.writeFileSync(path.resolve(__dirname, "../data/introductionArray.json"), JSON.stringify(newArray));
  res.json({message: 'Item removed', newArray: newArray});
});

module.exports = router;