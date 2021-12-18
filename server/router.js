/*
require app

set routes

export
*/

const controllers = require('./controllers');
const router = require('express').Router();

//I WANT TO USE THIS CODE BUT I GET AN ERROR MESSAGE:
//router.get('/main', controllers.get);

// router.get('/main', (req, res) => {
//   res.send('Hello World from router')
// })

router.get('/main', controllers.get)


router.post('/main', controllers.post)



module.exports = router;