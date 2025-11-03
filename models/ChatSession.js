import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    role: { type: String, enum: ["user", "assistant"], required: true },
    content: String,
    parts: [
      {
        type: { type: String, default: "text" },
        text: String,
      },
    ],
  },
  { _id: false }
);

const chatSessionSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true }, // user's phone number
    messages: [messageSchema],
  },
  { timestamps: true }
);

export default mongoose.models.ChatSession ||
  mongoose.model("ChatSession", chatSessionSchema);

// import mongoose from "mongoose";

// const messageSchema = new mongoose.Schema(
//   {
//     from: String, // user phone number
//     message: String,
//     reply: String,
//   },
//   { timestamps: true }
// );

// export default mongoose.models.Message ||
//   mongoose.model("Message", messageSchema);
