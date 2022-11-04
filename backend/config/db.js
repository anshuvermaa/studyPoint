import mongoose from "mongoose";

const connectDB=async()=>{
    try{
       
        const conn =await mongoose.connect( 'mongodb://127.0.0.1:27017/dp',{
            useUnifiedTopology:true,
            useNewUrlParser:true,
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)

    }catch(e){
        process.exit(1);

    }

}
export default connectDB;