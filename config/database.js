/* const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', 'data.db')),
    },
    useNullAsDefault: true,
  },
}); */

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('MYSQLHOST', '127.0.0.1'),
      port: env.int('MYSQLPORT', 3306),
      database: env('MYSQLDATABASE', 'mypartyzebra'),
      user: env('MYSQLUSER', 'root'),
      password: env('MYSQLPASSWORD', ''),
      ssl: env.bool(true)
    }
  },
});