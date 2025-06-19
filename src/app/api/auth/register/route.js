// Import our MongoDb connection utility
import { connectToDatabase } from "../../../lib/mongodb";

// Import the user model schema
import User from "../../../models/User";

// Import bcrypt for hashing passwords
import bcrypt from "bcryptjs";

// Define the POST request handler
export async function POST(req) {
  try {
    // parse the JSON body from th e request
    const { name, email, password } = await req.json();

    // Simple validation all fields are present
    if (!name || !email || !password) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Connect to the database
    await connectToDatabase();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ message: "User already exists" }), {
        status: 400,
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Return a success response
    return new Response(
      JSON.stringify({ message: "User created successfully" }),
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Something went wrong" }), {
      status: 500,
    });
  }
}
