var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const path = require('path');

require('./server/config/mongoose.js');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client/dist')));


var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(8000,function(){
    console.log('listenning port 8000');
});