const express= require("express");
const { getProducts } = require("../controller/productsController");
const { userSignUp , userLogIn} = require("../controller/userController");

const router = express.Router();

router.post('/signup', userSignUp);
router.post('/login', userLogIn);

router.get('/products', getProducts);

module.exports=router