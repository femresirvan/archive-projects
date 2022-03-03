const express = require('express');
const dotenv = require('dotenv')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose');
const router = require('./routes/routes');
//mongoose connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(express.static('public'));
app.use('/',router);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
});
