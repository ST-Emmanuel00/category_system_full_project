import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils";

interface CustomErrorFormat {
    message: string;
    type: string;
    value?: any;
    path?: string;
}

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error("Error:", err.message);

    const errors: CustomErrorFormat[] = [];

    if (err instanceof AppError) {
        errors.push({
            message: err.message,
            type: "AppError",
            value: req.params,
            path: req.path,
        });

    } else {
        errors.push({
            message: err.message || "Internal Server Error",
            type: "general",
            path: "Internal Server Error",
        });
    }

    res.status(err.statusCode).json({ errors });
};