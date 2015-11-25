# Data Visualization and Communication


## Overview
This program will be a great way to visualize data. This is intended to help graphically monitor sales and analyze trends. I'll be storing sales transactions into a MongoDB and querying it based on inputted dates. There will be User Authentication to verify whoever is looking at the data is authorized. See the sample json file I've included

## Data Model

I want to use mongoose.


First draft schema:

```javascript
// mock schema
var Transaction= new mongoose.Schema({
	created_at:  Date,
	gross_sales_money: Number,
	creator_id: String,	
});

```

## Research Topics and Grading Scheme 
Mongoose- no-sql database http://d3js.org
(3 Points)	User-auth
(2 Point)		Crossfilter.js - data manipulation library
(0 Points)	Dc.js - library wrapper for D3.js to help with the plotting
(2 Points)	D3.js - data visualization engine to render charts and graphs
(1 Point)		Responsive design- mobile tablet layouts
(1 Point)		Sass CSS

Prospective topics 
(1 point)		Integrated visual effects




thinking about making user-authenticated access. It may be better to make data access private or with certain degrees of authentication (simply put, only certain people can see certain stuff) .

possibly: nodemailer.js

## Wireframes

![list create](img/demo.png)

