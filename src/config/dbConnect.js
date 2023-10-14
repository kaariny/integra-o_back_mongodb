import mongoose from "mongoose";


async function connectDataBase(){
    mongoose.connect("mongodb+srv://araujookariny:kaka123@cluster0.1glbkji.mongodb.net/KsaImportsvendas?retryWrites=true&w=majority");

    return mongoose.connection;
}

export default connectDataBase;

