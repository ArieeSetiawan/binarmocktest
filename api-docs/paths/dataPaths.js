module.exports = {
    '/data/create': {
        post: {
          tags: ["CRUD V1"],
          summary: "Create Data need Authorization",
          description: "An endpoint to create Data",
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
                    price: {
                      type: 'integer',
                    },
                    image:{
                        type: 'string',
                    }
                  },
                  required: [
                    'name',
                    'price',
                    'image',
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
                    message: 'Create item success',
                  }
                }
              }
            }
          },
          security: [
            {
              token: []
            }
          ]
        }
},
    '/data/':{
      get: {
        tags: ["CRUD V1"],
        summary: "Show All Data need Authorization",
        description: "An endpoint to get All Data",
        responses:{
          content: {
            'application/json': {
              example:{
                  status: 200,
                  message: 'Successfully get all Data',
                  list : [
                      {
                          id: 'abcd-efgh',
                          username: 'Abc123',
                          email: 'Abc@mail.com',
                          createdAt: '',
                          createdBy: '',
                      }
                  ],
              },
              401:{
                  content: {
                      'application/json': {
                        example: {
                          status: 401,
                          message: 'Cannot Access this Page'
                        }
                      }
                    }
                }
            }       
        },
      },
      security: [
        {
          token: []
        }
      ],
      },
      
},
    '/data/{id}':{
      get: {
        tags: ["CRUD V1"],
        summary: "Show Data by ID need Authorization",
        description: "An endpoint to get Data by ID",
          parameters:[{
          name: "id",
          in: "path",
          required: true,
          type: "uuid",
      },
    ],
        responses:{
          content: {
            'application/json': {
              example:{
                  status: 200,
                  message: 'Successfully get Customer',
                  list : [
                      {
                          id: 'abcd-efgh',
                          username: 'Abc123',
                          email: 'Abc@mail.com',
                          createdAt: '',
                          createdBy: '',
                      }
                  ]
              },
              401:{
                  content: {
                      'application/json': {
                        example: {
                          status: 401,
                          message: 'Cannot Access this Page'
                        }
                      }
                    }
                }
            },
        },
      },
      security: [
        {
          token: []
        }
      ],
  },
      put: {
        tags: ["CRUD V1"],
        summary: "Edit Data by ID need Authorization",
        description: "An endpoint to Edit Data by ID",
          parameters:[
            {
          name: "id",
          in: "path",
          required: true,
          type: "string",
      },     
    ],
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
                price: {
                  type: 'string',
                },
              },
              required: [
                'name',
                'price',
              ]
            },
          }
        }
      },
        responses:{
          content: {
            'application/json': {
              example:{
                  status: 200,
                  message: 'Successfully get all User',
                  list : [
                      {
                          id: 'abcd-efgh',
                          username: 'Abc123',
                          email: 'Abc@mail.com',
                          createdAt: '',
                          createdBy: '',
                      }
                  ]
              },
              401:{
                  content: {
                      'application/json': {
                        example: {
                          status: 401,
                          message: 'Cannot Access this Page'
                        }
                      }
                    }
                }
            },
                   
        },
      },
      security: [
          {
            token: []
          }
        ]
      },
      delete: {
        tags: ["CRUD V1"],
        summary: "Delete Data by ID need Authorization",
        description: "An endpoint to Delete Data by ID",
          parameters:[
            {
          name: "id",
          in: "path",
          required: true,
          type: "string",
      },     
    ],
        responses:{
          content: {
            'application/json': {
              example:{
                  status: 200,
                  message: 'Successfully get all User',
                  list : [
                      {
                          id: 'abcd-efgh',
                          username: 'Abc123',
                          email: 'Abc@mail.com',
                          createdAt: '',
                          createdBy: '',
                      }
                  ]
              },
              401:{
                  content: {
                      'application/json': {
                        example: {
                          status: 401,
                          message: 'Cannot Access this Page'
                        }
                      }
                    }
                }
            },
                   
        },
      },
      security: [
          {
            token: []
          }
        ]
      },
},
}