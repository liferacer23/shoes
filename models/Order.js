import mongoose from "mongoose";

const OrderSchema = mongoose.Schema(
  {
    customer: {
      type: String,
      require: [true, "Customer cant be empty please"],
      maxlength: [50,'Max size is 50 characters'],
    },
    adress: {
      type: String,
      require: [true, "Address cant be empty"],
      maxlength: [200, "Address can not be greater than 10000 characters man."],
    },
    total: {
      type: Number,
      require: true,
    },
    status: {
      type: Number,
      default:0,
    },
    method: {
        type: Number,// pay with cash 0 papall 1
        required:true
    },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model('Order',OrderSchema)