const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    trim: true,
    minlength: [3, 'Username must be at least 3 characters long'],
    maxlength: [50, 'Username cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
  },
  passwordHash: {
    type: String,
    required: [true, 'Password hash is required'],
    minlength: [8, 'Password hash must be at least 8 characters long']
  },
  name: {
    first: {
      type: String,
      trim: true,
      maxlength: [50, 'First name cannot exceed 50 characters']
    },
    last: {
      type: String,
      trim: true,
      maxlength: [50, 'Last name cannot exceed 50 characters']
    }
  },
  address: {
    street: {
      type: String,
      trim: true,
      maxlength: [100, 'Street address cannot exceed 100 characters']
    },
    city: {
      type: String,
      trim: true,
      maxlength: [50, 'City cannot exceed 50 characters']
    },
    state: {
      type: String,
      trim: true,
      maxlength: [50, 'State cannot exceed 50 characters']
    },
    zip: {
      type: String,
      trim: true,
      maxlength: [20, 'ZIP code cannot exceed 20 characters']
    },
    country: {
      type: String,
      trim: true,
      maxlength: [50, 'Country cannot exceed 50 characters']
    }
  },
  phone: {
    type: String,
    trim: true,
    match: [/^\+?\d{10,15}$/, 'Please use a valid phone number']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
},
  {
    versionKey: false,
    timestamps: true // includes createdAt and updatedAt fields
  });

// Indexing
  userSchema.index({ username: 1 });
userSchema.index({ email: 1 });

// Pre-save hook to update the updatedAt field
userSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const User = mongoose.model('Users', userSchema);

module.exports = User;