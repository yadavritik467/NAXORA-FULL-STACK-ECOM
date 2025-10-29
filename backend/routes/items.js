import express from "express";
import {
    AddToCart,
    Checkout,
    GetAllCartItems,
    GetAllProducts,
    RemoveFromCart
} from "../controllers/Items.js";

const router = express.Router();

// for products
router.post("/cart", AddToCart);
router.get("/cart", GetAllCartItems);
router.delete("/cart/:id", RemoveFromCart);

router.get("/products", GetAllProducts);

router.post("/checkout",Checkout)

export default router;
