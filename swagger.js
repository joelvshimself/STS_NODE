const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Usuarios y Transacciones',
      version: '1.0.0',
      description: 'Documentación de endpoints con Swagger',
    },
  },
  apis: ['./controller/*.js'], // Ruta a los archivos con comentarios Swagger
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = {
  swaggerUi,
  swaggerSpec,
};
