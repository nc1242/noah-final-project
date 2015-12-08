var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require( '../db' );
var Transaction = mongoose.model('Transaction');
//var User = mongoose.model('User');

// CHAI START
var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();
// END

router.get('/graph', function(req, res) {
  Transaction.find(function(err, data, count) {
    res.render( 'graph', {dataset : data})
  })
  //res.render('graph', {dataset: data})
});

router.get('/graph2', function(req, res) {
  res.render('graph2')
});

router.get('/input', function(req, res) {
	res.render('input')
});


router.post('/input', function(req, res) {
  function DateGenerator(arr){
    expect(arr).to.have.length.of(3);
    expect(arr[0]).to.be.a('string');
    expect(arr[1]).to.be.a('string');
    expect(arr[2]).to.be.a('string');
    switch (Number(arr[1])){
      case 1:
        arr[1] = 'Jan';
        break;
      case 2:
        arr[1] = 'Feb';
        break;
      case 3:
        arr[1] = 'Mar';
        break;
      case 4:
        arr[1] = 'Apr';
        break;
      case 5:
        arr[1] = 'May';
        break;
      case 6:
        arr[1] = 'Jun';
        break;
      case 7:
        arr[1] = 'Jul';
        break;
      case 8:
        arr[1] = 'Aug';
        break;
      case 9:
        arr[1] = 'Sep';
        break;
      case 10:
        arr[1] = 'Oct';
        break;
      case 11:
        arr[1] = 'Nov';
        break;
      case 12:
        arr[1] = 'Dec';
        break;
      default:
        arr[1] = null;
      }
      expect(arr[1]).not.to.be.null;
      var newArr = []
      newArr.push(arr[2]);
      newArr.push(arr[1]);
      newArr.push(arr[0].slice(-2))
      var str = newArr.toString()
      var res = replaceAll(str, ",", "-");
      return res;
  }


  if (req.body.close != "" && req.body.date != ""){
    var date = DateGenerator(req.body.date.split("-"));
    expect(date).to.be.a('string');

    new Transaction({
      close : req.body.close,
      date : date
    }).save(function(err){
  		if (err){
  			console.log(err)
  			res.render('input', {alert: err})
  		}
		  console.log(req.body.amount, req.body.date)
		  res.render('input', {alert: "successfully created transaction"})
	 })
  }
  else{
      res.render('input', {alert: "invalid transaction"}) 
  }
});

router.get('/data', function(req, res) {
    Transaction.find(function(err, data, count) {
    res.render( 'data', {tuple : data})
  })
});

router.get('/data2', function(req, res) {
    Transaction.find(function(err, data, count) {
    res.send(data);
  })
});

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

module.exports = router;
