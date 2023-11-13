const express = require('express');

const app = express();

//database//
const connectDB = require('./config/db');

const bodyParser = require('body-parser');
app.use(express.json({extend:false}));
app.use(bodyParser.urlencoded({extended:true}));

//connecting to db//
connectDB();

//schema//
const UserCreds = require('./models/userCreds');
const Catalog = require('./models/catalog');

//server//
const port = 8000;
app.listen(port, ()=>console.log(`Server Running On Port ${port} `));


//routes//
const userRoutes = require('./routes/userRoutes');
app.use('/user', userRoutes);
const catalogRoutes = require ('./routes/catalogRoutes');
app.use('/search', catalogRoutes);