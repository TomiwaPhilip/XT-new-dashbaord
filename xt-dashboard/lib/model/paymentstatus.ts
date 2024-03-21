import { Schema, model, models } from 'mongoose';

const Payment = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  paid: {
    type: Boolean,
    default: false,
  },
});

const PaymentStatus = models.PaymentStatus || model("PaymentStatus", Payment);

export default PaymentStatus;