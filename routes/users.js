var express = require('express');
var router = express.Router();

/* GET users listing. */
<<<<<<< HEAD
router.get('/', function(req, res) {
=======
router.get('/', function(req, res, next) {
>>>>>>> c2b8175a9f5d027209e2897183af1c023088580c
  res.send('respond with a resource');
});

module.exports = router;
