import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb+srv://manish:Manish%40123@clustersso.hsh1rvv.mongodb.net/";

if (!MONGODB_URI) throw new Error("⚠️ Missing MONGODB_URI");

let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

export async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: "Brilworks",
        bufferCommands: false,
      })
      .then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
