import Express from "express";
import { usersSignup, userLogin } from "../controller/user-controller.js";
import { getProducts, getProductById } from "../controller/product-controller.js";
// import { addPaymentGateway } from "../controller/payment-controller.js";

const router = Express.Router();

router.post('/signup', usersSignup);
router.post('/login', userLogin);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);

// router.post('/payment', addPaymentGateway)
export default router;