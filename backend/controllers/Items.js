import { CartItem } from "../models/CartItem.js";
import { Products } from "../models/Products.js";
import { AppError, catchAsync } from "../utils/utils.js";

// export const AddProductInDB = catchAsync(async (req, res, next) => {
//   await Products.insertMany(ProductData);

//   return res
//     .status(201)
//     .json({ success: true, message: "Products added in db" });
// });

export const GetAllProducts = catchAsync(async (req, res, next) => {
  const allProducts = await Products.find({});

  return res.status(200).json({ success: true, allProducts });
});

export const AddToCart = catchAsync(async (req, res, next) => {
  const productId = req.body.productId;

  const existingInCart = await CartItem.findOne({ productId: productId });
  if (existingInCart) {
    return next(new AppError("Product is already exist in cart", 400));
  }
  await CartItem.create({
    productId,
    qty: 1,
  });
  return res.status(200).json({ message: "Product added in cart" });
});

export const RemoveFromCart = catchAsync(async (req, res, next) => {
  const productId = req.params.id;
  const deletedItem = await CartItem.findOneAndDelete({ productId });

  if (!deletedItem) {
    return next(new AppError("Product not found in cart", 404));
  }

  return res.status(200).json({
    success: true,
    message: "Product removed from cart successfully",
  });
});

export const GetAllCartItems = catchAsync(async (req, res, next) => {
  let allCartItems = await CartItem.find({})
    .populate("productId", "name price image")
    .sort({ createdAt: -1 });

  return res.status(200).json({ success: true, allCartItems });
});

export const Checkout = catchAsync(async (req, res, next) => {
  const { name, email, cartItems } = req.body;

  if (cartItems?.length === 0) {
    return next(new AppError("Cart is empty", 400));
  }

  const totalAmount = cartItems.reduce((acc, curr) => {
    return acc + curr.qty * curr.productId.price;
  }, 0);

  const receipt = {
    customer: {
      name,
      email,
    },
    items: cartItems.map((item) => ({
      name: item.productId.name,
      price: item.productId.price,
      qty: item.qty,
      subtotal: item.qty * item.productId.price,
    })),
    totalAmount,
    timestamp: new Date().toISOString(),
    orderId: `ORD-${Date.now().toString().slice(-6)}`, // mock order ID
  };

  await Promise.all(
    cartItems.map(async (c) => {
      await CartItem.findOneAndDelete({ productId: c?.productId?._id });
    })
  );

  return res.status(201).json({
    success: true,
    message: "Checkout successful",
    receipt,
  });
});
