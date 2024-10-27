import express, { Application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { corsValues } from "./config";
import routes from "./routes";
import { errorHandler, limiter } from "./middlewares";

const app: Application = express();

// Middlewares
app.use(express.json());
app.use(cors(corsValues));
app.use(cookieParser());
app.use(limiter);

// Routes
app.use("/api", routes);

// Error handler should be the last middleware
app.use(errorHandler);

export default app;
