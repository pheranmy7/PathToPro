const express = require('express')
const router = express.Router()
const UpdateTemplateCopy =  require('../models/UpdateModels')
const bcrypt = require('bcrypt')

//Router connection for Profileupdate
router.put('/Profile', async (request, response) =>{

     const saltPassword = await bcrypt.genSalt(10) //generating a salt for the password
     const securePassword = await bcrypt.hash(request.body.Password, saltPassword) //me hashing the password to make it more secure;salting the password that has been hashed



   const ProfileUser = new ProfileTemplateCopy({
     Surname:request.body.Surname,
     OtherName:request.body.OtherName,
     Email:request.body.Email,
     Username:request.body.Username,
     Password:securePassword,
     ConfirmPassword:securePassword,
   })
   ProfileUser.save()
   .then(data =>{
        response.json(data)
   })
   .catch(error =>{
        response.json(error)
   })
})

router.put('/Profile')
module.exports = router