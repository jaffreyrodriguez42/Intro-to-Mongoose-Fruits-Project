const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true}); // create connection and a database named fruitsDB

// const { Schema } = mongoose; // without this, Schema is not defined

const fruitSchema = new mongoose.Schema({ // create a schema
	name: {type: String, required: [true, "Please check your data entry, no name specified!"]}, // data validation
	rating: {type: Number, min: 1, max: 10},
	review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema); // create a model // creates a collection named "fruits"

const fruit = new Fruit({
	name: "Banana",
	rating: 5,
	review: "I like banana!"
});

// fruit.save(); //save to the database fruitsdB under fruits collection

const personSchema = new mongoose.Schema({
	name: String,
	age: Number,
	favouriteFruit: fruitSchema // embedding document
});

const Person = mongoose.model('Person', personSchema);

Fruit.find(function(err, fruits){  // it reads document from mongodb database to the app.js
	if(err){
		console.log(err);
	}else{
		mongoose.connection.close(); // close the mongoDB database connection // no need to do control c on terminal

		fruits.forEach(function(fruit){
			console.log(fruit.name);
		});
		
	}
});

const pineapple = new Fruit({
	name: "Pineapple",
	rating: 7,
	review: "It's a great fruit!"
});

// pineapple.save();

const person = new Person({
	name: "Jenny",
	age: "12",
	favouriteFruit: pineapple
});

// person.save();

const melon = new Fruit({
	name: "Melon",
	rating: 5,
	review: "Nice fruit!"
});

melon.save();

Person.updateOne({name: "Jaff Rey"}, {favouriteFruit: melon}, function(err){
	if(err){
		console.log(err);
	}else{
		console.log("Successfully added favourite fruit!");
	}
});





