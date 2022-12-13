// ---- PostgreSQL ----
/* module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('PGHOST', '127.0.0.1'),
        port: env.int('PGPORT', 5931),
        database: env('PGDATABASE', 'railway'),
        user: env('PGUSER', 'postgres'),
        password: env('PGPASSWORD', 'password'),
        ssl: env.bool(true)
      }
    }
}); */

// ---- MySQL ----
/* module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('MYSQLHOST', '127.0.0.1'),
      port: env.int('MYSQLPORT', 7709),
      database: env('MYSQLDATABASE', 'railway'),
      user: env('MYSQLUSER', 'root'),
      password: env('MYSQLPASSWORD', 'password'),
      ssl: env.bool(true)
    }
  },
}); */

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});