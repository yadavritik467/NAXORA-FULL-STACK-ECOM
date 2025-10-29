import { AppError } from "../utils/utils.js";
const errorMiddleware = (err, req, res, next) => {
    let statusCode = 500;
    let message = "Internal Server Error";
    if (err instanceof AppError) {
        statusCode = err.statusCode;
        message = err.message;
    }
    return res.status(statusCode).json({ success: false, message });
};
export default errorMiddleware;
