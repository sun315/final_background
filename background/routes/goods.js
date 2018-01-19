var express = require('express');
var router = express.Router();
var GoodsModel = require("../model/goods_list");

router.get('/add', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;
