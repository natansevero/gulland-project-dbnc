const mongoose = require('mongoose');

module.exports = app => {
  const Schema = mongoose.Schema;

  const PostBlogSchema = new Schema({
    titulo: { type: String, required: true },
    conteudo: { type: String, required: true },
    data: { type: Date, default: Date.now }
  });

  const BlogSchema = new Schema({
    id_usuario: { type: Number, required: true },
    posts: [ PostBlogSchema ]
  });

  return mongoose.model('blogs', BlogSchema);
}
