const {Product,Category,ProductCategory}=require('../db/models')

// create
const createProduct = async (req, res) => {
    try {
        const { name, description, price, stock, imgUrl, categoryIds } = req.body;

        // Create the product
        const productData = await Product.create({
            name,
            description,
            price,
            stock,
            imgUrl
        });

        if (categoryIds && categoryIds.length > 0) {
            const productCategoryData = categoryIds.map(categoryId => ({
                categoryId,
                productId: productData.id
            }));

            // Bulk create associations in ProductCategory
            await ProductCategory.bulkCreate(productCategoryData);

            // Optional: You might want to return the associated categories as well
            const associatedCategories = await ProductCategory.findAll({
                where: { productId: productData.id }
            });
            productData.associatedCategories = associatedCategories;
        }
        res.status(200).json({ success: true, data: productData });

    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get All products

const getAllProduct=async(req,res)=>{
    try {
        let data=await Product.findAll({
            include:[{
                model:Category,
                as: "categories",
          through: { attributes: [] },
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
            }]
        })
        res.status(200).json({data:data,success:true})
    } catch (error) {
        res.status(500).json({message: 'Server error'})
    }
}

module.exports={
    createProduct,getAllProduct
}