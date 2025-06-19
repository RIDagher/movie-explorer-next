import mongoose from "mongoose";

// Define the schema for the User document
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    // Automatically manage createdAt and updateAt timestamps
    timestamps: true,
  }
);

// If the User model already exists, use it; otherwise, create a new model
export default mongoose.models.User || mongoose.model("User", userSchema);
