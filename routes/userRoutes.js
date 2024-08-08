const express=require('express')
const router=express.Router()
const userController=require('../controller/userController')

router.get('/getAllUsers',userController.getAllUsers)
router.post('/createUser',userController.createUser)
router.post('/login',userController.loginUser)

module.exports =router