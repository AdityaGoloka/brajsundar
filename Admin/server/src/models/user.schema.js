import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    password: {
      type: String,
      select: false,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("Users", userSchema);

export default User;
