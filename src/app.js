const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.set('port', process.env.PORT || 4000);

app.use(cors());

app.use(morgan('dev'));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/information", require('./routes/information.routes'));

app.use("/lodging", require('./routes/lodging.routes'));

app.use("/user", require('./routes/user.routes'));

module.exports = app;
