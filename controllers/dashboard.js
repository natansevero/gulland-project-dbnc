module.exports = app => {
  let DashboardController = {
    verificaDash: (req, res) => {
      if(req.query.tipo == 'blog') return res.render('dashboard/blog')
      else if(req.query.tipo == 'portifolio') return res.render('dashboard/portifolio')
      else return res.redirect('/')
    },

    BlogDash: {

    },

    PortifolioDash: {
      create: (req, res) => {

      },

      retrieve: (req, res) => {

      },

      getOne: (req, res) => {

      },

      update: (req, res) => {

      },

      delete: (req, res) => {

      }
    }
  }

  return DashboardController;
}
