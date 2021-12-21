const express = require('express');
const router = express.Router();
const db = require('../bin/schema')

router.post('/', function(req, res, next) {

  const { id, name } = req.body;
  let number = 0;
  // console.log(db.find())
  db.find((err, docs)=>{
    number=Number(docs.length+1);
    const data = {"id": number,"name": name};
    db.create(data)
    res.send({code: 200,message: '添加成功'});
  });
});

module.exports = router;