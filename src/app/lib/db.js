import mongoose from "mongoose";

const connection = {};
export async function connectDB() {
  if (connection.isConnected) {
    console.log("Already connected to the database");
    return;
  }
  try {
    if (!process.env.DATABASE_URL) throw new Error("⚠️ Missing MONGODB_URI");
    const db = await mongoose.connect(process.env.DATABASE_URL || "", {});
    connection.isConnected = db.connections[0].readyState;
    console.log("**********Database connected successfully**********");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
}

// let cached = global.mongoose;
// if (!cached) cached = global.mongoose = { conn: null, promise: null };

// export async function connectDB() {
//   if (cached.conn) return cached.conn;
//   if (!cached.promise) {
//     cached.promise = mongoose
//       .connect(MONGODB_URI, {
//         dbName: "Brilworks",
//         bufferCommands: false,
//       })
//       .then((mongoose) => mongoose);
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }
