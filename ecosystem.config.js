module.exports = {
  apps: [
    {
      name: "node_app",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "development",
        PORT: 8080,
        DB_NAME: "db_test",
        DB_USERNAME: "duyph",
        DB_PASSWORD: "!1qaz@wsx",
        DB_HOST: "localhost",
        DB_PORT: "3306",
      },
    },
  ],
};
