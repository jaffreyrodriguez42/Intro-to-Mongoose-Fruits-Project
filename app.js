const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true}); // create connection and a database named fruitsDB

// const { Schema } = mongoose; // without this, Schema is not defined

const fruitSchema = mongoose.Schema({ // create a schema
	name: String,
	rating: Number,
	review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema); // create a model // creates a collection named "fruits"

const fruit = new Fruit({
	name: "Banana",
	rating: 5,
	review: "I like banana!"
});

// fruit.save(); //save to the database fruitsdB under fruits collection

const personSchema = mongoose.Schema({
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

//add multiple documents to the fruits colllection
Fruit.insertMany([kiwi, banana, mango], function(err){ // We use "Fruit" model and the insertMany method
	if(err){
		console.log(err);
	}else{
		console.log("Successfully added to fruitsDB!");
	}
});

