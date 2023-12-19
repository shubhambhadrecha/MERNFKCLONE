import { products } from "./Constants/data.js"
import Product from "./model/product-schema.js";


const defaultData = async () => {
    try {
        await Product.insertMany(products);

        console.log("Data imported Successfully")
    }
    catch (error) {
        console.log("hhhh", error.message);
    }
}

export default defaultData;