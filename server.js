var path = require('path');
var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(express.static(path.join(__dirname, 'client')));
app.listen(process.env.PORT || 3000);
console.log('running app on port:3000')


var dataArray = [
    {"author": "Pete Hunt", "text": "This is one comment"},
    {"author": "Jordan Walke", "text": "This is *another* comment"}
];

app.get('/api/comments',function(req,res){
    res.send(dataArray)
})

app.post('/api/comments',function(req,res){
    dataArray.push(req.body)
})
