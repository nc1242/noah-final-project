var mongoose = require('mongoose'), URLSlugs = require('mongoose-url-slugs');
var passportLocalMongoose = require('passport-local-mongoose');
var _ = require('underscore');

//my schema goes here

var UserSchema = new mongoose.Schema({ });

var schema = {
	date :  String,
	close : Number,
};

_.each(_.keys(schema), function (attr) { schema[attr].required = true; });
var Transaction = mongoose.Schema(schema);

UserSchema.plugin(passportLocalMongoose);
//Transaction.plugin(URLSlugs('id'));
mongoose.model('User', UserSchema);
mongoose.model('Transaction', Transaction);
mongoose.connect('mongodb://localhost/transactions');
