let express = require('express');
let router = express.Router();
const db = require('../bin/schema')

router.post('/', function(req, res, next) {

  let {id, name} = req.body;
  let query = {"id":Number(id)};
  let updates = {$set: { "name" : name }};
  console.log(id)
  db.updateOne(query,updates,(err,raw)=>{
    res.send({code: 200,message: '修改成功'});
  })
});

module.exports = router;