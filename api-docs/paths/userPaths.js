module.exports = {
    '/users/register': {
        post: {
          tags: ["Authentication"],
          summary: "Create User",
          description: "An endpoint to add User",
          requestBody: {
            required: true,
            content: {
              'application/x-www-form-urlencoded': {
                schema: {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                    },
                    email: {
                      type: 'string',
                    },
                    password: {
                      type: 'string',
                    },
                  },
                  required: [
                    'name',
                    'email',
                    'password'
                  ]
                },
              }
            }
          },
          responses: {
            200: {
              content: {
                'application/json': {
                  example: {
                    status: 201,
                    message: 'Register success',
                  }
                }
              }
            }
          }
        }
},
    '/users/login': {
    post: {
      tags: ["Authentication"],
      summary: "Login",
      description: "An endpoint to Login User",
      requestBody: {
        required: true,
        content: {
          'application/x-www-form-urlencoded': {
            schema: {
              type: 'object',
              properties: {
                email: {
                  type: 'string',
                },
                password: {
                  type: 'string',
                },
              },
              required: [
                'email',
                'password'
              ]
            },
          }
        }
      },
      responses: {
        200: {
          content: {
            'application/json': {
              example: {
                status: 201,
                message: 'Login success',
                token : ''
              }
            }
          }
        }
      }
    }
},

}