const { user } = require('../models');
const bcrypt = require ('bcrypt');
const jwt = require ('jsonwebtoken');
require('dotenv').config()

class userController {
    static async register (req,res){
    try{
      const cekAvailability = await user.findOne({
        where :{
          name: req.body.name,
          email: req.body.email
        }
      })
      if (cekAvailability != null){
        return res.status(400).json({
          msg: 'Username or Email has been Taken'
        })
      }

     const hashedpassword = await bcrypt.hash(req.body.password, 12)
        const newUser = {
            name: req.body.name,
            email: req.body.email,
            password: hashedpassword,
        }
    await user.create(newUser);

    return res.status(201).json({
        message: 'Successfully add user',
        user_email: newUser.email
      })
      
    }
    catch(err){
        return res
        .status(err.status ||  500)
        .json({ message: err.message || 'Internal server error' })
}
    }

    static async login(req,res){
    try{
        const userLogin = {
            email: req.body.email,
            password: req.body.password,
        }
        let u = await user.findOne({where:{email:userLogin.email}});
        if (u){
            const match = await bcrypt.compareSync(userLogin.password, u.password);
            if(match){
              const token = jwt.sign({
                id: u.id,
                name: u.name,
                email: u.email,
                roleType:u.roleType,
              }, process.env.SECRET_KEY,{expiresIn: '1h'});
              
                res.status(200).json({msg:'Successfully Login',token});
            }else{
                res.status(401).json('Wrong Password');
            }
        }else{
            res.status(401).json('User Not Found');
        }
    }

      catch (err) {
        return res
          .status(err.status || 500)
          .json({
            message: err.message || 'Internal server error.',
          })
      }
    }
}



module.exports = userController;