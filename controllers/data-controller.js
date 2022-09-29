const { data } = require('../models');
const fs = require ('fs');
const uuid = require('uuid');

class itemController{
    static async createItem (req,res){
        try{         
          await data.create({
            name: req.body.name,
            price: req.body.price,
            imageurl: req.body.image
          })
          return res.status(201).json({
            message: 'Successfully add Item',
          })
        }
        catch(err){
            return res
            .status(err.status ||  500)
            .json({ message: err.message || 'Internal server error' })
    }  
    }
    static async getAllItem(req, res) {
        const rows = await data.findAll({
        });
    
        return res.status(200).json({
          message: 'Successfully get all Item',
          data: rows
        })
    }  

    static async getItemByID(req, res) {
        try {
            const getitemID = req.params.id
            const rows = await data.findAll({
                where:{
                  id: getitemID,
                  },
              }
            );
            if (rows == 0){
                return res.status(404).json({
                  message: "Item not Found"
                })
              }
              else{
                return res.status(200).json({
                  message: 'Succesfully get Item Information',
                  data: rows,
                })}

            } catch (err) {
              return res
                .status(err.status ||  500)
                .json({ message: err.message || 'Invalid Input' })
            }
    }

    static async editItem(req, res) {
        try { 
            await data.update({
                name:req.body.name,
                price:req.body.price,
            },{
                where: { id: req.params.id }
              });   
            return res.status(200).json({
                message: 'Successfully Edit Item'
              })
        }
         catch (err) {
          return res
            .status(err.status ||  500)
            .json({ message: err.message || 'Internal server error' })
    }}

    static async deleteItem(req, res) {
      try {
        if (!req.params.id) throw { status: 400, message: 'ID cannot be empty' };
  
        await data.destroy({
          where: { id: req.params.id }
          
        });
  
        return res.status(200).json({
          message: 'Successfully delete Item'
        })
      } catch (err) {
        return res
          .status(err.status ||  500)
          .json({ message: err.message || 'Internal server error' })
    }
    }
}

module.exports = itemController