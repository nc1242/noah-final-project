var mongoose = require('mongoose'), URLSlugs = require('mongoose-url-slugs');
var passportLocalMongoose = require('passport-local-mongoose');
	
//my schema goes here

var UserSchema = new mongoose.Schema({ });

var Transaction = new mongoose.Schema({
	date :  String,
	amount : String,
	id : String	
});

UserSchema.plugin(passportLocalMongoose);
//Transaction.plugin(URLSlugs('id'));
mongoose.model('User', UserSchema);
mongoose.model('Transaction', Transaction);
mongoose.connect('mongodb://localhost/transactions');
