var express = require('express');
var router = express.Router();

// bring in swagger-ui and our swagger.json document
var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('../swagger.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET swagger documentation page */
router.get('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;
