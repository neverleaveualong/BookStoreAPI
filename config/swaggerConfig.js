const swaggerJSDoc = require("swagger-jsdoc");
const port = process.env.PORT || 3000;

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "BookStore API",
    version: "1.0.0",
    description: "BookStore 서비스의 API문서",
  },
  servers: [
    {
      url: `http://localhost:${port}`,
      description: "개발 서버",
    },
  ],
};

const options = {
  swaggerDefinition,
  // API 문서 주석이 포함된 파일 경로 (예: routes 또는 controllers 디렉토리)
  apis: ["./routers/*.js", "./app.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
