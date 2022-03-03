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
app.get("/api/timestamp/:date?", async (req, res) => {
  if (req.params.date) {
    let dateString = req.params.date;
    if (/\d{5,}/.test(dateString)) {
      const dateInt = parseInt(dateString);
      res.json({
        unix: dateInt,
        utc: new Date(dateInt).toUTCString()
      });
    } else {
      let dateObject = new Date(dateString);

      if (dateObject.toString() === "Invalid Date") {
        res.json({
          error: "Invalid Date"
        });
      } else {
        res.json({
          unix: dateObject.valueOf(),
          utc: dateObject.toUTCString()
        });
      }
    }
  } else {
    const tarih = new Date();
    res.json({
      unix: tarih.valueOf(),
      utc: tarih.toUTCString()
    })
  }
});
//#endregion

const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
