module.exports = {
  development: {
    username: "my_user",
    password: "my_password",
    database: "my_database",
    host: "localhost",
    port: 5432,
    dialect: "postgres",
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true, // Se o seu banco em produção requer SSL
        rejectUnauthorized: false,
      },
    },
    pool: {
      max: 5,
      min: 0,
      idle: 3600,
    },
  },
};
