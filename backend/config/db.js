import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://jivansh34:Jivansh99@cluster0.lhsum.mongodb.net/food-del').then(()=>console.log("DataBase Connected"));
}