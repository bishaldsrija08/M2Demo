const mongoose = require("mongoose")

const connectionString = process.env.CONNECTION_STRING

async function connectToDatabase() {
    if (!connectionString) {
        throw new Error("Connection string is not defined.")
    }
    try {
        await mongoose.connect(connectionString);
        console.log('✅ Connected to MongoDB Atlas');
    } catch (err) {
        console.error('❌ MongoDB connection error:', err);
        throw err;
    }
}

module.exports = connectToDatabase