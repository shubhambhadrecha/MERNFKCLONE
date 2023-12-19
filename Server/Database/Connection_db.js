import mongoose from "mongoose";

export const Connection = async (USERNAME, PASSWORD) => {
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@flipkart-web.4jxjatu.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, {})
        console.log("Database connected successfully");
    }
    catch (error) {
        console.log("Error while connecting to shubhadb", error.message);
    }
}

export default Connection