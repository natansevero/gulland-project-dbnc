const pg = require('pg');
const connString = 'postgres://postgres:12345@localhost:5432/GullandProject';

function connFactory(num) {
  if(num === 1) return pg.connect(connString);
  else if(num === 2) return;
  else if(num === 3) return;
}

module.exports = () => {
  return connFactory;
}
