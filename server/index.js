const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios').default;
const path = require('path');
const router = require('./router');
const cookieParser = require('cookie-parser')

app.use(express.json()) //middleware to parse JSON in the request

app.use(cookieParser())

module.exports.app = app;
//should I use this or:
//module.exports.app = app;

//this is setting a path to access static files--your html file, the dirname is the path to this file inside your computer, and the string param after is the replacement path that should go to the static files folder. Console.log this to check it.
app.use(express.static(path.join(__dirname, '../client/dist')));


app.get('/test', (req, res) => {
  //console.log('from server:', res)
  res.send('success!')
})

app.use('/api', router);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})

/*
DO I NEED THIS? / WHAT DOES THIS DO?

// Middleware
var morgan = require('morgan');
var cors = require('cors');

// Logging and parsing
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
*/