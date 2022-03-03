const express = require('express');
const app = express();
const ejs = require('ejs');
const router = require('./routes/router');
const cors = require('cors');
const body_parser = require('body-parser');
const path = require('path')
app.use(cors());
app.use(body_parser.urlencoded({'extended': 'true'}));
app.use(body_parser.json());
app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/', router);

app.listen(process.env.PORT || 3000, () => {
    console.log('sunucu calisti');
});