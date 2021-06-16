const express = require ('express');
const app = express ();
const cors = require('cors');
const port = 8000;

app.use(express.json());
app.use(express.urlencoded( { extended : true} ) );
app.use(cors());

// setup mongodb
// setup routes

app.listen(port, () => console.log("Listening on port:  " + port));