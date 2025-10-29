
import cors from "cors";
import express from "express";
import errorMiddleware from "./middleware/errorMiddleware.js";
import ItemsRoutes from "./routes/items.js";
import { connectDB } from "./db/Database.js";
const app = express();
// Start Server
const PORT = 8080;
// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true,limit:"50MB"}));
app.use(
  cors({
    origin: "http://localhost:5173", 
  })
);
// Database Connection
connectDB();
// Routes
app.use("/api", ItemsRoutes);
app.use(errorMiddleware);
app.get("/", (req, res) => {
  res.send("hii");
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
