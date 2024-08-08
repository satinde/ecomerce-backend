const {Role}=require('../db/models')


// create role
const createRole=async (req,res)=>{
    try {
    let {name,description}=req.body
    const data= await Role.create({name,description})
    res.status(201).json(data);
    } catch (error) {
    res.status(500).json({ message: 'Server error' });
    }
}
// get all roles
const getRoles=async (req,res)=>{
    try {
    const data= await Role.findAll()
    const count=await Role.count()
    res.status(201).json({ data,success:true,count });
    } catch (error) {
    res.status(500).json({ message: 'Server error' });
    }
}
// get role by id
const getRoleById=async (req,res)=>{
    try {
    let {id}=req.params
    const data= await Role.findByPk(id)
    if(!data){
        return res.status(404).json({ message: 'Role not found' });
    }
    res.status(201).json({ data,success:true });
    } catch (error) {
    res.status(500).json({ message: 'Server error' });
    }
}

// Delete Role

const deleteRoleById=async (req,res)=>{
    try {
    let {id}=req.params
    const data= await Role.findByPk(id)
    if(!data){
        return res.status(404).json({ message: 'Role not found' });
    }
    // Delete the role
    await data.destroy();
    res.status(201).json({ message: 'Role deleted successfully' });
    } catch (error) {
    res.status(500).json({ message: 'Server error' });
    }
}


module.exports={
    createRole,
    getRoles,
    getRoleById,
    deleteRoleById
}