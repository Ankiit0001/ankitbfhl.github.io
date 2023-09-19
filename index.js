const cors = require("cors");
const express = require('express');
const bodyParser = require("body-parser");

// connectDB();
const app = express()
const port = 5000

//middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

//app.get('/',(req,res) => {
//    res.send("Hello World!")
//})

//Routes
// app.use('/user',require('./routes/user_login'))
// app.use('/complaint',require('./routes/complaint'))

app.use('/bfhl', require('./routes/bfhl'))

app.listen(port,() => {
    console.log('App listening at http://localhost:5000',port)
})