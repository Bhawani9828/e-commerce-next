import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Next.js API',
      version: '1.0.0',
    },
  },
  apis: [path.resolve(__dirname, './src/app/api/users/**/*.ts')],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
