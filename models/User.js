const mongoose = require ("mongoose");
const schema = mongoose.Schema;

// Define the User schema
const UserSchema = new schema ({
    name: {
        type: String,
        required: true,
        trim: true,
      },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
      },
    phone: {
        type: String,
        required: true
      },
    address: {
        type: String,
        required: true,
      },
      answer: {
        type: String,
        required: true,
      },
      role: {
        type: Number,
        default: 0,
      },
    }, { timestamps: true });


// Create the User model based on the schema
const User = mongoose.model('User', UserSchema);

// Export the User model
module.exports = User;