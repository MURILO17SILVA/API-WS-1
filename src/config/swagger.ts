export const swaggerOptions = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Produtos  API',
      version: '0.1.0',
      description: 'API para estudo de documentação de API',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'Murilo silva de souza',
        url: 'https://github.com/murilosilva17',
        email: 'spmurilosp15@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3001',
      },
    ],
  },
  apis: ['**/*.yml'],
}
