require('dotenv').config();
const express = require('express');
const cors = require('cors');
const shortId = require('shortid');
const bodyParser = require('body-parser');
const uri = process.env.DB_URI;
const app = express();
const dns = require('dns');
const router = require('./routes/routes');

//configs
const options = {
  family: 6,
  hints: dns.ADDRCONFIG | dns.V4MAPPED,
};
options.all = true;
const port = process.env.PORT || 3000;
app.use(express.urlencoded({
  extended: false
}));
app.use(cors());
app.use(express.json());
app.use('/', router);
app.use('/public', express.static(`${process.cwd()}/public`));

//mongoose configs
require('./configs/db_connection');

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});