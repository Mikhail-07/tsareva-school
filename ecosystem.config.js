module.exports = {
  apps: [
    {
      name: "next-app",     // Название приложения
      script: "node_modules/next/dist/bin/next",  // Путь к бинарнику Next.js
      args: "start -p 3001", // Аргументы для запуска в режиме production на порту 3001
      instances: "max",      // Максимальное количество инстансов, зависит от количества ядер CPU
      exec_mode: "cluster",  // Режим кластера для обработки запросов параллельно
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
