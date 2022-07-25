import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AUTH_SECRET } from "@/config/auth"
import MissedTokenError from "@/shared/errors/MissedTokenError";
import InvalidTokenError from "@/shared/errors/InvalidTokenError";

export const ensureIsAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
        throw new MissedTokenError;
    };

    try {
        jwt.verify(token, AUTH_SECRET)
    } catch(err) {
        throw new InvalidTokenError;
    }

    next();
};