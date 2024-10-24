import "dotenv/config"; 
import { httpStatusCode } from "../constants/httpsStatusCode.mjs";
import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
    try {

        const authHeader = req.headers.cookie;

        if(!authHeader) return res.status(httpStatusCode.BAD_REQUEST).json("Access denied")

        const token = authHeader.split("=")[1]

        const decodedUser = jwt.verify(token, process.env.JWT_SECRET)

        req.user = decodedUser;

        next()

    } catch (error) {
        res.status(httpStatusCode.BAD_REQUEST).json("Invalid or expired token");
        console.log(error)
    }
}