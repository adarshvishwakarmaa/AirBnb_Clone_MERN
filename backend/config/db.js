import mongoose from "mongoose"

const myDbConnect = async() =>{
   
    try {
      await  mongoose.connect(process.env.MONGODB_URL)
      console.log("Connection Success");
    } catch (error) {
        console.log("Connection Failed");
    }
}

export default myDbConnect;