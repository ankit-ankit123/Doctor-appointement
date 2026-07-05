import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Doctor Appointment API',
      version: '1.0.0',
      description: 'Swagger documentation for the Doctor Appointment booking platform',
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        User: {
          type: 'object',
          properties: {
            id: { type: 'string', example: '64b1f6d152ec8c0f9eb0f2b1' },
            name: { type: 'string', example: 'John Doe' },
            email: { type: 'string', format: 'email', example: 'john@example.com' },
            phone: { type: 'string', example: '+1234567890' },
          },
        },
        Appointment: {
          type: 'object',
          properties: {
            id: { type: 'string', example: '64b1f6d152ec8c0f9eb0f2b2' },
            patientId: { type: 'string', example: '64b1f6d152ec8c0f9eb0f2b1' },
            date: { type: 'string', format: 'date', example: '2026-07-10' },
            time: { type: 'string', example: '10:30' },
            department: { type: 'string', example: 'Cardiology' },
            comments: { type: 'string', example: 'Need follow-up consultation' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
          },
        },
        ErrorResponse: {
          type: 'object',
          properties: {
            message: { type: 'string', example: 'Something went wrong' },
          },
        },
      },
    },
  },
  apis: ['./routes/*.js'],
}

const specs = swaggerJsdoc(options)

const swaggerDocs = (app) => {
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }))
  app.get('/api/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(specs)
  })
}

export { swaggerDocs }
