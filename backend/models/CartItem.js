import mongoose from "mongoose";
const CartSchema = new mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, required: true ,ref:'NexoraProduct'},
    qty: { type: Number, required: true },
  },
  { timestamps: true }
);
export const CartItem = mongoose.model("NexoraCartItem", CartSchema);


