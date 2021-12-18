/*
need to require db helpers

set controllers obj
get, post,

for each method, params (req, res)
use a control method inside
controler will take a err, data
  if err,
  res.status(errStatus).send(err)
  else
  res.status(successStatus).send(result if post or receieve message if get);

export
*/

const helpers = require('../database/helpers');

//** ASK FOR HELP HERE:
//If I use this code I can't properly invoke it with router.get:
var controllers = {
  get: function(req, res) {
    helpers.getAll(function (err, result) {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(result);
      }
    })
  },

  post: function(req, res) {
    //get data from req.body
    //use helpers.post(data, function(err, data))
    var postInfo = req.body;
    //console.log(postInfo)
    helpers.post(postInfo, function(err, result) {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(result);
      }
    })
  }
}

//why didn't this work when I had an arrow after param??
// var controllers = {
//   get: function(req, res) => {
//     res.send('hello from controller')
//   },
//   post: ''
// }


module.exports = controllers;

/*
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.post('/', (req, res) => {
  res.send('I got your post')
})



app.listen(port, () => {
  console.log(`listening on port ${port}`);
})
*/