# Data Visualization and Communication


## Overview
This program will be a great way to visualize data. This is intended to help graphically monitor sales and analyze trends. I'll be storing sales transactions into a MongoDB and querying it based on inputted dates. There will be User Authentication to verify whoever is looking at the data is authorized.

## Data Model

I want to use mongoose.


First draft schema:

```javascript
// mock schema
var Transaction= new mongoose.Schema({
	Date: String,
	Close: Number,
});

```

## Research Topics and Grading Scheme 
Mongoose- no-sql database http://d3js.org
(3 Points)	User-auth
(1 Point)	Unit testing: Chai
(2 Points)	D3.js - data visualization engine to render charts and graphs
(1 Point)	Responsive design- mobile tablet layouts
(1 Point)	Sass CSS
(1 Point)	JSHint

## Wireframes

![list create](img/demo.png)

