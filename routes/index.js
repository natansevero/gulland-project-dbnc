module.exports = app => {

  let IndexController = app.controllers.index;

  app.get('/', IndexController.index);
  app.get('/cadastro', IndexController.cadastro);
  app.post('/cadastrar', IndexController.cadastrar);
  app.get('/sair', IndexController.sair);
}
