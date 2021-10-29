var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/discord', (req, res) => {
  res.json({
    msg: 'Discord'
  })
});


module.exports = router;
