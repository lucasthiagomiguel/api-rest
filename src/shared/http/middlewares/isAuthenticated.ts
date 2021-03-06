import auth from "@config/auth";
import AppError from "@shared/errors/AppError";
import { Response,Request, NextFunction} from "express";
import { verify } from "jsonwebtoken";

export default function isAuthenticated(
    request:Request,
    response:Response,
    next:NextFunction
): void{
    const authHeader = request.headers.authorization;
    if(!authHeader){
        throw new AppError('JWT Token is missing');
    }
    const [,token] = authHeader.split(' ');

    try {
        const decodeToken = verify(token,auth.jwt.secret);
        return next();
    } catch (error) {
        throw new AppError('Invalido JWT Token');
    }
}