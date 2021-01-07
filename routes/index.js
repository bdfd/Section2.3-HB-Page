var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('Event_Blog/20200405', {
    layout: 'page_layouts/20200405_layout',
  });
});

//router address: /20200405
//descriptions: Build on 20200405
//comments: www.bdfd.tk
router.get('/20200405', function (req, res, next) {
  res.render('Event_Blog/20200405', {
    layout: 'page_layouts/20200405_layout',
  });
});
module.exports = router;
