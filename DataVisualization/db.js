var mongoose = require('mongoose'), URLSlugs = require('mongoose-url-slugs');
var passportLocalMongoose = require('passport-local-mongoose');
	
//my schema goes here

var UserSchema = new mongoose.Schema({ });

var Transaction= new mongoose.Schema({
	created_at:  Date,
	gross_sales_money: Number,
	creator_id: String,	
});

UserSchema.plugin(passportLocalMongoose);

mongoose.model('User', UserSchema);
mongoose.model('Transaction', Transaction);
mongoose.connect('mongodb://localhost/transactions');
