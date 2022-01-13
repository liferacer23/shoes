import mongoose from "mongoose";

const JordanSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "Enter Title please"],
      maxlength: [50, "Title can not be greater than 60 characters man."],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      require: [true, "Enter Description please"],
      maxlength: [10000, "Title can not be greater than 10000 characters man."],
      trim: true,
    },
    image: {
      type: [String],
      require: [true, "Upload Images please"],
    },
    prices: {
      type: [Number],
      require: [true, "What is the price??"],
      unique: true,
      trim: true,
    },
    extraOptions: {
      type: [
        {
          text: { type: String, required: true },
          price: { type: String, required: true },
        },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Jordan ||
  mongoose.model("Jordan", JordanSchema);
