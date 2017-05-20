var express = require('express')

var app = express();

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(express.static('./dialogs/pdf/'))

require('./main')(app)



app.listen(process.env.PORT, function(err){
    console.error(err)
})