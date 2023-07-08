const express = require('express')
const router = express.Router()
const SignTemplateCopy =  require('../models/SigninModels')
const bcrypt = require('bcrypt')

//Router connection for SignIn 
router.get('/Sign', async (request, response) =>{

   const saltPassword = await bcrypt.genSalt(10) //me generating a salt for the password
   const securePassword = await bcrypt.hash(request.body.Password, saltPassword) //me hashing the password to make it more secure;salting the password that has been hashed

   const SignUser = new SignTemplateCopy({
        Username:request.body.Username,
        Password:securePassword
   })
   SignUser.save()
   .then(data =>{
        response.json(data)
   })
   .catch(error =>{
        response.json(error)
   })
})

router.get('/Sign')
module.exports = router