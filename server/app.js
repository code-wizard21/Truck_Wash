const createError = require('http-errors');
const cors = require("cors");
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const pg = require("pg");
const indexRouter = require('./routes/index');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// PostgreSQL connection string
const connectionString = 'postgres://postgres:skystar5@localhost:5432';
const client = new pg.Client(connectionString);
client.connect()
  .then(() => console.log("Successfully connected to PostgreSQL database"))
  .catch(e => console.log(e));

app.use('/app', indexRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));


module.exports = app;
