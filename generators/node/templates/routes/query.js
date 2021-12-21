const express = require('express');
const router = express.Router();
const db = require('../bin/schema')
router.post('/', function(req, res, next) {

  // const {id,name} = req.body;
  let data = [];
  db.find((err,docs)=>{
    console.log(docs)
    data =docs;
    res.send({code: 200,message: '查询成功', data});
  })
});

module.exports = router;