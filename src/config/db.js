import mongoose from 'mongoose';

const mongoDb = process.env.MONGODB_URI

if(!mongoDb){
    throw new Error("Please define connection string")
}
let cached = global.mongoose
if(!cached){
    cached = global.mongoose = {conn: null, promise:null};
}

async function connectToDatabase() {
    if (cached.conn) {
      return cached.conn;
    }
  
    if (!cached.promise) {
      cached.promise = mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).then((mongoose) => {
        return mongoose;
      });
    }
    cached.conn = await cached.promise;
    return cached.conn;
  }
  
  export default connectToDatabase;