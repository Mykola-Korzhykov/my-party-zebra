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
    },
    acquireConnectionTimeout: 5000,
    pool: {
      min: 0,
      max: 10,
      createTimeoutMillis: 8000,
      acquireTimeoutMillis: 8000,
      idleTimeoutMillis: 8000,
      reapIntervalMillis: 1000,
      createRetryIntervalMillis: 100,
    }
}); */

// ---- MySQL ----
module.exports = ({ env }) => ({
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
});