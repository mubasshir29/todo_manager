import mongoose from "mongoose"

export  const connectDB = async () => {
    try{
        await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@crudapp.wexyfxp.mongodb.net/TaskManager?retryWrites=true&w=majority`)
        console.log("Database Connected")
    }
    catch(error){
        console.log("Failed to connect to DB")
    }
}