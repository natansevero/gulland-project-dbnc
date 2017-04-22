module.exports = (app) => {
  let UsuarioModel = app.models.usuario;

  let IndexController = {
    index: (req, res) => {
      res.render('index');
    },

    cadastro: (req, res) => {
      res.render('cadastro');
    },

    cadastrar: (req, res) => {

    },

    sair: (req, res) => {

    }

  }

  return IndexController;
}
