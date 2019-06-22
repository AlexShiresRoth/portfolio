const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './client/views'));
app.use(express.static(path.join(__dirname, './client')));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/',indexRouter);

module.exports = app;

