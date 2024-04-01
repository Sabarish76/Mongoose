const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  Street: String,
  City: String,
});

const UserSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    min: 1,
    max: 100,
    validate: {
      validator: (v) => v % 2 === 0,
      message: (props) => `${props.value} is not even number`,
    },
  },
  email: {
    type: String,
    minLength: 10,
    required: true,
    lowercase: true,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    immutable: true,
    default: Date.now(),
  },
  bestFriend: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  Skills: [String],
  address: addressSchema,
});

module.exports = mongoose.model("User", UserSchema);
