module.exports = (app) => {
  let conn = app.libs.connFactory(1);

  let UsuarioModel = {
    cadastrar: (usuario, callback) => {
      conn
        .then(client => {
          client.query(`
            insert into usuario(primeiro_nome, segundo_nome, email, senha, tipo_template, dominio)
            values ('${usuario.primeiro_nome}', '${usuario.segundo_nome}', '${usuario.email}',
            '${usuario.senha}', '${usuario.tipo_template}', '${usuario.dominio}')
          `, callback);
        });
    },

    searchByEmail: (email, callback) => {
      conn
        .then(client => {
          client.query(`select * from usuario where email ilike ${email}`, callback);
        });
    },

    login: (login, callback) => {
      conn
        .then(client => {
          client.query(`
            select * from usuario where email = '${login.email}' and senha = '${login.senha}'
          `, callback);
        });
    }
  }

  return UsuarioModel;
}
