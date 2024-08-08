const { Role, User, UserRole } = require("../db/models");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [
        {
          model: Role,
          as: "role",
          through: { attributes: [] },
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
      attributes:["id","name", "email","userStatus"],
    });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new user
const createUser = async (req, res) => {
  try {
    const { name, email, userStatus, password, roleIds } = req.body;

    const findUser = await User.findOne({
      where: { email },
    });
    if (findUser) {
      return res.status(500).json({ error: "User Email Already Exists" });
    }
    // Create the user
    const user = await User.create({ name, email, userStatus, password });

    if (roleIds && roleIds.length > 0) {
      // Prepare data for insertion into UserRoles
      const userRoles = roleIds.map((roleId) => ({
        userId: user.id,
        roleId: roleId,
      }));

      // Directly insert into UserRoles table
      await UserRole.bulkCreate(userRoles);
    }

    res.status(201).json({user,message:'User Created Succfully!'});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// login user
const loginUser=async (req,res)=>{
    try {
        let {email,password}=req.body
        let findUser=await User.findOne({
            where:{email}
        })
        console.log(findUser)
        if(!findUser){
            return res.status(400).json({message:"User not found"})
        }
         const isPasswordValid = await bcrypt.compare(password, findUser.password);
         if (!isPasswordValid) {
             return res.status(400).json({ message: "Invalid password" });
         }
         if(findUser?.userStatus !== "active"){
             return res.status(400).json({ message: "User not active" });
         }
        let token=jwt.sign({id:findUser.id},"jwtscreatekeyecommerce",{ expiresIn: '1h' })
        res.status(200).json({token,user:findUser})
    } catch (err) {
        res.status(500).json({error:err.message})
    }
}

module.exports = {
  getAllUsers,
  createUser,
  loginUser
};
