const crypto = require('crypto');

module.exports = (app) => {
  let UsuarioModel = app.models.usuario;

  let IndexController = {
    index: (req, res) => {
      res.render('index', { validacao: null });
    },

    cadastro: (req, res) => {
      res.render('cadastro', { validacao: null });
    },

    cadastrar: (req, res) => {
      let usuario = req.body;

      usuario.senha = crypto.createHash('md5')
                            .update(usuario.senha)
                            .digest('hex');

      UsuarioModel.cadastrar(usuario, (err, result) => {
        if(err) return res.render('cadastro', { validacao: "Error ao cadastrar! Verifique os campos" });
        else return res.redirect('/');
      });
    },

    login: (req, res) => {
      let login = req.body;

      login.senha = crypto.createHash('md5')
                            .update(login.senha)
                            .digest('hex');

      UsuarioModel.login(login, (err, result) => {
        if(err) return res.render('index', { validacao: "Error ao fazer login!" });
        else {
          if(result.rows.length > 0) {
            req.session.usuario = result.rows[0];

            if(result.rows[0].tipo_template == 'blog') return res.redirect('/dashboard?tipo=blog')
            else return res.redirect('/dashboard?tipo=portifolio');
          } else return res.render('index', { validacao: "Login inexistente!" });
        }
      });
    },

    sair: (req, res) => {
      req.session.destroy();
      res.redirect('/');
    }

  }

  return IndexController;
}
