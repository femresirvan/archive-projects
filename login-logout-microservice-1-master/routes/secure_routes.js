const express = require('express');
const router = express.Router();
const UserModel = require('../model/users')
const bcrypt = require('bcrypt');
router.get('/profile',(req, res, next) => {
    console.log(req.user);
    res.json({
      message: 'You made it to the secure route',
      user: req.user,
      token: req.query.secret_token
    })
  }
);

router.get('/delete_user', async(req,res,next)=>{
  try{
    const result = await UserModel.findByIdAndDelete(req.user);
    res.json({message:'The user has been removed.'})
  }
  catch(err){
    next(err);
  }
})

router.put('/reset_password',async (req,res,next)=>{
  if(req.body.password){
    try{
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const result = await UserModel.findByIdAndUpdate(req.user,{password: hashedPassword},{new:true});
      if(result){
        res.json({message:'The user password has been replaced.'})
      }
    }
    catch(err){
      next(err);
    }
  }

})

module.exports = router;