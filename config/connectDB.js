
const mongoose = require("mongoose"); // Import the mongoose library

// Define an asynchronous function to connect to the MongoDB database
const connectDB = async () => {
  try {
    // Attempt to connect to the MongoDB database using the connection string from the environment variable
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connection done with to MongoDB"); // Log success message upon successful connection
  } catch (error) {
    // Log error message if the connection attempt fails
    console.log(`Error: ${error.message}`);
  }
};

// Export the connectDB function so it can be used in other parts of the application
module.exports = connectDB;
