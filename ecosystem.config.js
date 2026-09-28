module.exports = {
  apps: [
    {
      name: "hudayriyat-island",
      script: "server.js",
      instances: "max",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        PORT: 4000,
        HOSTNAME: "127.0.0.1",
      },
    },
  ],
};
