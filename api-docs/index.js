const userPaths = require("./paths/userPaths");
const dataPaths = require ("./paths/dataPaths");
const testPaths = require ('./paths/testPaths')
require('dotenv').config();

module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'Test Binar',
    description: 'Introduction',
    contact:{
        name: "Binar",
        url:'https://www.binaracademy.com/',
      },
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Dev server'
    },
  ],
  components: {
    securitySchemes: {
      token: {
        type: 'apiKey',
        description: 'Login as User/Seller to get token.',
        in: 'header',
        name: 'authorization'
      }
    }
  },
  paths: {
    ...userPaths,
    ...dataPaths,
    ...testPaths,
  }
}