module.exports = app => {
  let auth = require('../libs/auth');
  let DashboardController = app.controllers.dashboard;

  // Rotas principal
  app.get('/dashboard', auth, DashboardController.verificaDash);

  // ----- Rotas específicas para Blog ------

  // ----- Rotas específicas para Portifólio ------
  // Render Complet Site
  app.get('/site_portifolio', auth, DashboardController.PortifolioDash.render_site);
  // Render view for add porfifolio
  app.get('/add_portifolio', auth, DashboardController.PortifolioDash.view_create);
  // Route create in portifolio
  app.post('/create_port', auth, DashboardController.PortifolioDash.create);

  // Route delete in portifolio
  app.get('/delete_port/:id_secao', auth, DashboardController.PortifolioDash.delete);

  // Render view for update portifolio
  app.get('/update_portifolio', auth, DashboardController.PortifolioDash.update_view);
  app.post('/update_port', auth, DashboardController.PortifolioDash.update);
}
