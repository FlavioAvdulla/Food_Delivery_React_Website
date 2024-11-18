import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://aflavio4366:F!@#264v10@cluster0.18o0f.mongodb.net/Food_Delivery_React_Website').then(()=>console.log("DB Connected"))
}