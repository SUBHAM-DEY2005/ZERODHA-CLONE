const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const UserSchema = require('../schemas/UserSchema'); // Import the schema

// Before saving to DB, hash the password
// Before saving to DB, hash the password
UserSchema.pre('save', async function () {
    // 1. Only hash if the password is new or changed
    if (!this.isModified('password')) return; 
    
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        // REMOVED next() - Not needed with async/await in modern Mongoose
    } catch (err) {
        throw err; // Throw the error so Mongoose catches it
    }
});


// The Model: The "Worker" that interacts with MongoDB
const User = mongoose.model('User', UserSchema);

module.exports = User;