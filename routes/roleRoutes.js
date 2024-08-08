const express=require('express')
const router=express.Router()
const roleController=require('../controller/roleController')

router.post('/createRole',roleController.createRole)
router.get('/getAllRoles',roleController.getRoles)
router.get('/getRoleById/:id',roleController.getRoleById)
router.delete('/deleteRoleById/:id',roleController.deleteRoleById)

module.exports =router