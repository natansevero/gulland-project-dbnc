const pg = require('pg');
const connString = 'postgres://postgres:12345@localhost:5432/GullandProject';

const mongoose = require('mongoose');
const url = "mongodb://localhost/gulland-project-dbnc";

const redis = require('redis');

function connFactory(num) {
  if(num === 1) return pg.connect(connString);
  else if(num === 2) return mongoose.connect(url);
  else if(num === 3) return redis.createClient();
}

module.exports = () => {
  return connFactory;
}
