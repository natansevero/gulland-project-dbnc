const mongoose = require('mongoose');

module.exports = app => {
  const Schema = mongoose.Schema;

  const SecaoPortifolioSchema = new Schema({
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    data: { type: Date, default: Date.now }
  });

  const PortifolioSchema = new Schema({
    id_usuario: { type: Number, required: true },
    secao: [ SecaoPortifolioSchema ]
  });

  return mongoose.model('portifolios', PortifolioSchema);;
}
