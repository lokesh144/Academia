import { connect } from 'mongoose';
import { config } from 'dotenv';
config();

const URI=process.env.MONGODB_URI;
console.log(`Connecting to MongoDB with URI: ${URI}`);
const connectDb=async()=>{
    try {
        await connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connection successful");
    } catch (error) {
        console.log(error);
        process.exit(0);
    }
};
export default connectDb;