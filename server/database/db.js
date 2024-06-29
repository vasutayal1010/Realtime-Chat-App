import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async() =>{
    const URL =
      `mongodb://${USERNAME}:${PASSWORD}@ac-t2swq65-shard-00-00.s0wjago.mongodb.net:27017,ac-t2swq65-shard-00-01.s0wjago.mongodb.net:27017,ac-t2swq65-shard-00-02.s0wjago.mongodb.net:27017/?replicaSet=atlas-1284g1-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Whatsapp-clone`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology : true});
        console.log("Succesful connect Mongodb");
    }
    catch(error){
        console.log("Error : ", error.message);
    }
}

export default Connection;