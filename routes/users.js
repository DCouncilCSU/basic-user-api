var express = require('express');
const fs = require('fs');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // we are just sending back a static array here
  res.send({
    users: [{ name: 'demo' }, { name: 'guest' }]
  });
});

router.get('/:name', function(req, res, next) {
  // in real life we will check our stored list of users and return the match, if it exists
  const requestedUser = req.params['name'];
  res.send({
    name: requestedUser    
  });
});

router.post('/:name', function(req, res, next) {
  res.send({ response: "Adding user "+req.params['name']});
  // would do the actual insert before response
});

module.exports = router;
