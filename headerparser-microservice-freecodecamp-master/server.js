require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

//configs
app.use(cors({
  optionsSuccessStatus: 200
})); 
app.use(express.static('public'));

//#region routes 
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
}); 

app.get("/api/hello", function (req, res) {
  res.json({
    greeting: 'hello API'
  });
});

app.get('/api/whoami', (req, res) => {
  res.json({
    "ipaddress": req.ip,
    "language": req.headers["accept-language"],
    "software": req.headers['user-agent'], 
  })
})

const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

