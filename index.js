const express = require('express');
const app=express();
const bodyParser=require('body-parser')
require('./config/dataBase')

const roleRoutes=require('./routes/roleRoutes')
const userRoutes=require('./routes/userRoutes')
const categoryRoutes=require('./routes/categoryRoutes')
const productRoutes=require('./routes/productRoutes')

// Body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Routes
app.use('/api/roles',roleRoutes)
app.use('/api/user',userRoutes)
app.use('/api/category',categoryRoutes)
app.use('/api/product',productRoutes)

const PORT=1000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})