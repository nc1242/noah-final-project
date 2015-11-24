var mongoose = require('mongoose'), URLSlugs = require('mongoose-url-slugs');

	
//my schema goes here


var Transaction= new mongoose.Schema({
	created_at:  Date,
	gross_sales_money: Number,
	creator_id: String,	
});

mongoose.model('Item', Transaction);
mongoose.connect('mongodb://localhost/DataVisualization');
