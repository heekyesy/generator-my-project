const express = require('express');
const router = express.Router();
const db = require('../bin/schema')

router.post('/', function(req, res, next) {
  const {id} = req.body;
  const data = {"id":Number(id)};
  db.remove(data,err=>{
    res.send({code: 200,message: '删除成功'});
  })
});

module.exports = router;