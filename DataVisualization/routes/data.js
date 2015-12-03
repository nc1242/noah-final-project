var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require( '../db' );
var Transaction = mongoose.model('Transaction');
//var User = mongoose.model('User');

router.get('/graph', function(req, res) {
	res.render('graph')
});

router.get('/input', function(req, res) {
	res.render('input')
});

router.post('/input', function(req, res) {
	new Transaction({
		id : 'temp',
		amount : req.body.amount,
		date : req.body.date
	}).save(function(){
		/*if (err){
			console.log(err)
			res.render('input', {alert: 'error creating transaction'})
		}*/
		console.log(req.body.amount, req.body.date)
		res.render('input', {alert: "successfully created transaction"})
	})
});

router.get('/data', function(req, res) {
  	Transaction.find(function(err, documents, count) {
  		//dates holds the total value for each day
  		dates = []
  		console.log('dates length : ', dates.length)
  		//for each transaction
  		for (var i = 0; i < documents.length; i ++){
  			//for each date
  			match = -1
  			for (var j = 0; j < dates.length; j ++){
  				//if the date doesn't exist, create a new entry
  				//console.log('dates[j] : ', dates[j].date, ' | documents[i].date : ', documents[i].date)
  				if (dates[j].date == documents[i].date){
  					//console.log("match! ",match)
  					match = j;
					//console.log('dates[j].date : ', dates[j].date, ' | documents[i].date : ', documents[i].date, ' | match : ', match)
					//console.log('	dates[j].amount : ', dates[j].amount, ' | documents[i].amount : ', documents[i].amount, ' | match : ', match)
  					break;
  				}
  				else{
	  				//console.log("no match")
  					match = -1;
  				}//endif
  			}//endfor
  			if (match < 0){
  				//console.log("doesn't match")
  			  	var obj = new Object()
  			  	obj.date = documents[i].date
  			  	obj.amount = parseFloat(documents[i].amount.replace("$", ""));
  			  	//var jsonString = JSON.stringify(obj)
  			  	//console.log(i, ' : ', jsonString)
  			  	dates.push(obj)
  			}
  			else{
  				//console.log("match! ",match)
  				var amount = parseFloat(documents[i].amount.replace("$", ""));
  				console.log(documents[i])
  				console.log(dates)
  				console.log()
  				dates[match].amount += amount;
  			}//endif
  		}//endfor
		//console.log('Transaction : ', err, documents, count)
		res.render( 'data', {tuple : dates})
	})
});

module.exports = router;
