import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  onboarded: {
    type: Boolean,
    default: false,
  },
  signupDate: {
    type: Date, // Corrected type to Date
    default: Date.now // Optional: Set default value to current date/time
  }
});

const User = models.User || model("User", UserSchema);

export default User;
