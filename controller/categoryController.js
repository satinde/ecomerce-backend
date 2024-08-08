const {Category}=require('../db/models')

// create
const createCategory=async (req,res)=>{
    try {
        let {name,description}=req.body

        let data=await Category.create({name,description})
        res.status(200).json({success:true,data:data})

    } catch (error) {
        res.status(500).json({message: 'Server error'})
    }
}

// Get All Categories

const getAllCategory=async(req,res)=>{
    try {
        let data=await Category.findAll()
        res.status(200).json({data:data,success:true})
    } catch (error) {
        res.status(500).json({message: 'Server error'})
    }
}

module.exports={
    createCategory,getAllCategory
}