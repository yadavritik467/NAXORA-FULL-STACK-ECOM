import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);
export const Products = mongoose.model("NexoraProduct", ProductSchema);


