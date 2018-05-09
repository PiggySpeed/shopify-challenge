const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 8080;


const app = express();

app.use(express.static(__dirname + '/dist'));
app.use('/assets', express.static(__dirname + '/assets'));

app.get('*', function (req, res){
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
});

app.listen(process.env.PORT || 8080, function(){
  console.log("Listening at %s...", PORT);
});
