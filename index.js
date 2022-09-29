const express = require ('express');
const app = express();
const swaggerUI = require('swagger-ui-express');

const userRoutes= require ('./routes/user-routes');
const dataRoutes= require ('./routes/data-routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users',userRoutes)
app.use('/data',dataRoutes)

const swaggerDoc = require ('./api-docs');
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc, {
    swaggerOptions: {
      docExpansion: "none"
    }
  }));

app.use('/test',(req,res)=>{
    return res.status(201).json({
        message: 'Hello There',
      })
})

app.listen(3000, ()=>{
    console.log("Server is running on port", 3000);
})