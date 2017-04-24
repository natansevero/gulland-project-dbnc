module.exports = app => {
  let PortifolioModel = app.models.portifolio;

  let DashboardController = {
    verificaDash: (req, res) => {
      if(req.query.tipo == 'blog') return res.render('dashboard/blog')
      else if(req.query.tipo == 'portifolio') {
        let _id = req.session.usuario.id;
        PortifolioModel.find({ id_usuario: _id }, (err, result) => {
          if(err) return res.redirect('/');
          else if(result.length <= 0) {
            PortifolioModel.create({ id_usuario: _id }, (err, result) => {
              if(err) return res.redirect('/');
              else return res.render('dashboard/portifolio', { secao: [] })
            })
          } else {
            let secao = result[0].secao;
            return res.render('dashboard/portifolio', { secao: secao.reverse() })
          }
        })
      }
      else return res.redirect('/')
    },

    BlogDash: {

    },

    PortifolioDash: {
      render_site: (req, res) => {
        res.render('site/site_portifolio');
      },

      view_create: (req, res) => {
        res.render('dashboard/add_portifolio', { validacao: null });
      },

      update_view: (req, res) => {
        let dados_secao = req.query;
        res.render('dashboard/update_portifolio', { validacao: null, dados_secao: dados_secao });
      },

      create: (req, res) => {
        let secao = req.body;
        let _id = req.session.usuario.id;

        PortifolioModel.update({ id_usuario: _id }, { $push: { secao: secao } }, (err, result) => {
          if(err) return res.render('dashboard/add_portifolio', { validacao: "Algo de errado aconteceu!" });
          else return res.redirect('/dashboard?tipo=portifolio');
        });
      },

      retrieve: (req, res) => {

      },

      getOne: (req, res) => {

      },

      update: (req, res) => {
        let id_usuario = req.session.usuario.id;

        PortifolioModel.findOne({ id_usuario: id_usuario }, (err, user) => {
          if(err) return res.redirect('/dashboard?tipo=portifolio');
          user.secao.forEach((s, index) => {
            if(s._id == req.body._id) {
              user.secao[index].titulo = req.body.titulo;
              user.secao[index].descricao = req.body.descricao;
            }
          });

          user.save((err, result) => {
            if(err) {
              console.log("erro:", err);
              return res.redirect('/dashboard?tipo=portifolio');
            }
            else return res.redirect('/dashboard?tipo=portifolio');
          })
        })
      },

      delete: (req, res) => {
        let id_usuario = req.session.usuario.id;
        let id_secao = req.params.id_secao;

        PortifolioModel.update({ id_usuario: id_usuario }, { $pull: { secao: { _id: id_secao } } }, (err, result) => {
          if(err) return res.redirect('/dashboard?tipo=portifolio');
          else return res.redirect('/dashboard?tipo=portifolio');
        })
      }
    }
  }

  return DashboardController;
}
