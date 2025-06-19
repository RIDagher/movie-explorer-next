import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

// Throw an error if the URI is not defined (prevents silent failure)
if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

// Global cache to avoid reconnecting in development
// Use a global variable to cache the connection across hot reloads (especially useful in development)
let cached = global.mongoose;

// If no cached object exists, create an empty one
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

// Export an async function that ensures a single MongoDB connection is reused
export async function connectToDatabase() {
  // If the connection is already cached, return it immediately
  if (cached.conn) {
    return cached.conn;
  }

  // If no promise exists yet, create a new connection and store the promise
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        bufferCommands: false, // Optional setting to prevent Mongoose from buffering commands if not connected yet
      })
      .then((mongoose) => {
        return mongoose; // Once connected, return the mongoose instanc
      });
  }

  // Wait until the promise resolves to return the connection
  cached.conn = await cached.promise;

  // Return the established connection
  return cached.conn;
}
