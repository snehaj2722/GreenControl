
var fs = require('fs');
var qs=require("querystring")
var express=require('express');
var bodyParser = require('body-parser')
var nodemailer = require('nodemailer');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var app = express();
var http = require('http').createServer(app);
var port=4034;



var mysql = require('mysql');
const { response } = require('express');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: 'igreen'
});


app.set('view engine', 'ejs');
app.use(express.static(__dirname));
app.post('index.html', urlencodedParser, function (req, res) {
  var data=req.body;
 console.log(data);
  console.log("it came");

})  

app.post('/register/UserAndNgo.html', urlencodedParser, function (req, res) {
  var user=req.body;
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = 'INSERT INTO login SET ?';
    con.query(sql, user,function (err, data) { 
        if (err) throw err;
           console.log("User dat is inserted successfully "); 
    });
  });
  res.render('index',{data:req.body});
  // res.send('welcome, ' + req.body.Name)
}) 
app.post('/register/worker.html', urlencodedParser, function (req, res) {
  var worker=req.body;
  
    var sql = 'INSERT INTO login SET ?';
    con.query(sql, worker,function (err, data) { 
        if (err) throw err;
           console.log("User dat is inserted successfully "); 
    });
 
  res.render('index',{data:req.body});
})   
app.post('/register/workerhead.html', urlencodedParser, function (req, res) {
  console.log(req.body);
  var worker=req.body;
  var sql = 'INSERT INTO login SET ?';
    con.query(sql, worker,function (err, data) { 
        if (err) throw err;
           console.log("User dat is inserted successfully "); 
    });
  res.render('index',{data:req.body});
})       
app.post('/userorngo/pages/reportdirt.html', urlencodedParser, function (req, res) {
 
  var report=req.body
  var sql = 'INSERT INTO report SET ?';
  con.query(sql, report,function (err, data) { 
      if (err) throw err;
         console.log("reported  "); 
  });
  
 console.log(req.body);

}) 
app.post('/workerhead/pages/openticket.html', urlencodedParser, function (req, res) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '#',
      pass: '#'
    }
  });
  var mailOptions = {
    from: '#',
    to: '#',
    subject: 'Confirm if reported area cleaned',
    text: 'glad you contribute to the societies cleanliness',
    html:"<p>glad you contribute to the societies cleanliness'</p><submit value='close'>"
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  
  
    })
    
  
 
  
 


  
http.listen(port, function(){
  console.log("running on port= "+ port);
});
  


