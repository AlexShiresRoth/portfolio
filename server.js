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


let PORT = (`5000`||process.env.PORT);

app.set(PORT);

app.listen(PORT,() => console.log(`Server started on port ${PORT}`))

module.exports = app;

