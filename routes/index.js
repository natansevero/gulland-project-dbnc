module.exports = app => {
  app.get('/', (req, res) => {
    res.render('index');
  })

  app.get('/cadastro', (req, res) => {
    res.render('cadastro');
  })
}
