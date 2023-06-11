const express = require('express');

const contactRoutes = require('./contact.routes');

let port = 5000;

if (process.env.PORT) {
  port = process.env.PORT;
}

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(contactRoutes);

app.listen(port);
