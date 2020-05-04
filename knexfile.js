// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: "backend",
      user: "postgres",
      password: "0000"
    },
    migrations: {
      directory: './src/database/migrations' 
    },
    seeds: {
      directory: './src/database/seeds' 
    }
  },
};
