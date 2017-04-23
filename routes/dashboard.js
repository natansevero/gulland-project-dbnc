module.exports = app => {
  let auth = require('../libs/auth');
  let DashboardController = app.controllers.dashboard;

  // Rotas principal
  app.get('/dashboard', auth, DashboardController.verificaDash);

  // Rotas específicas para Blog

  // Rotas específicas para Portifólio

}
