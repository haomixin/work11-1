var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var con=mysql.createPool({
  host:'localhost',
  user:'root',
  password:'root',
  database:'baobei'
})

router.post('/',function(req,res,next){
  var h=req.body.zry;
  res.header('Access-Control-Allow-Origin','*');
  con.query(`SELECT * FROM cha WHERE name LIKE '%${h}%'`,function(err,rows,fields){
    res.send(rows);
    console.log(rows)
  })
})
module.exports = router;
