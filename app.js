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
	age: Number
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({
	name: "Jaff Rey",
	age: 33
});

// person.save();

const kiwi = new Fruit({
	name: "Kiwi",
	rating: 7,
	review: "The best fruit ever!"
});

const banana = new Fruit({
	name: "Banana",
	rating: 5,
	review: "Not so much!"
});


const mango = new Fruit({
	name: "Mango",
	rating: 9,
	review: "Very Yummy fruit!"
});

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

Fruit.updateOne({_id: "5fc9b0aaffc3143a08c4099b"}, {name: "Peach"}, function(err){
	if(err){
		console.log(err);
	}else{
		console.log("Successfully Updated the Document!");
	}
});

Fruit.deleteOne({_id: "5fc9b0aaffc3143a08c4099b"}, function(err){
	if(err){
		console.log(err);
	}else{
		console.log("Successfully deteted the document!");
	}
});

Fruit.deleteMany({name: "Apple"}, function(err){
	if(err){
		console.log(err);
	}else{
		console.log("Successfully deleted many!");
	}
});

