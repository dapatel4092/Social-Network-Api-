const express = require('express');
const db = require('./config/connection');
const routes = require('./Main/routes');



const PORT = process.env.PORT || 3005;
const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for running on port ${PORT}!`);
  });
});