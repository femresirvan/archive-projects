const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser')
const tunnel = require('tunnel-ssh');
require('dotenv').config();
const fs = require('fs');
const cors = require('cors');

const config = {
  username:'root',
  host:'164.90.165.155',
  // agent : process.env.SSH_AUTH_SOCK,
  privateKey:require('fs').readFileSync('deneme0'),
  port:22,
  dstPort:27017,
  passphrase:'giris',

};

const server = tunnel(config,(error, server) => {
  if(error){
      console.log("SSH connection error: " + error);
  }
  mongoose.connect('mongodb://localhost:27017/users',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  mongoose.set("useCreateIndex", true);
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'DB connection error:'));
  db.once('open', function() {
      // we're connected!
      console.log("DB connection successful");
  });
});

require('./services/auth');

const routes = require('./routes/routes');
const secureRoute = require('./routes/secure_routes');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes);

// Plug in the JWT strategy as a middleware so only verified users can access this route.
// app.use('/user', passport.authenticate('jwt', { session: false }), secureRoute);

// Handle errors.
app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({ error: err });
});

app.listen(3000, () => {
  console.log('Server started.')
});

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));