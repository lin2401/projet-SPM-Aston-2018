//Data_source
var students_data = require('../spm/src/assets/json_files/students.json');

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var urlServer = 'http://localhost:5000';

var app = express();

// Middlewares
app.use(bodyParser.json()); //Le body des requêtes sont parsées (json -> js)
app.use(express.static('public'));

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "PUT, DELETE");
	next();
});

// Routes
//get routes
app.get('/students', (req, res) => {
	
	students_list = [];

	if(students_data){
		for (let i = 0; i<students_data.length; i++){
			students_list.push(students_data[i]);
		}

		return res.json(students_list);
	} else {
		res.status(404).send("Il n'y a pas d'étudiants !");
	}
});

// Helper functions
function getLastId(arr) {
	var maxId = 0;
	for (var i=0; i<arr.length; i++) {
		if (arr[i].id > maxId) {
			maxId = array[i].id
		}
	}
	return maxId;
}

app.listen(5000, () => console.log('Serveur écoute le port 5000...'));
