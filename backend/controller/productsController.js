const {Product}= require("../model/productSchema.model")


const getProducts = async (req,res) =>{
    try{
        const products= await Product.find({});
        res.json(products);
    }catch(err)
    {
        console.log(err)
    }
}





module.exports= {
   getProducts
}