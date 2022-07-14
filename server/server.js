const express = require('express'); //Line 1
const app = express(); //Line 2
const path = require('path');
const port = process.env.PORT || 3001; //Line 3
const cors = require('cors');

const { Pool, Client } = require("pg");

const credentials = {
  user: "postgres",
  host: "mypostgres",
  database: "postgres",
  password: "ankit"
};
console.log('dirname', __dirname);
const buildPath = path.normalize(path.join(__dirname, '..', 'build'));
console.log('buildPath', buildPath);
app.use(express.static(buildPath));
// Connect with a connection pool.

async function poolDemo() {
  try {
	const pool = new Pool(credentials);
	const now = await pool.query("Create table demo (name varchar)");
	console.log(now);
	await pool.end();
  
	// return now;
  }
  catch(e) {
	  console.log('Error occur', e);
  }
}

poolDemo();

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Line 11

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(cors(corsOptions))