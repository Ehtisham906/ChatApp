import express from "express"; //web framework for building apis giving routes, middleware
import cookieParser from "cookie-parser"
import cors from "cors";

import path from "path";

import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import dotenv from "dotenv"
import bodyParser from 'body-parser';
import { app, server } from "./lib/socketio.js";

dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(bodyParser.json({ limit: "10mb" })); // Adjust the limit as needed
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true
    })
)

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

if (process.env.NODE_ENV === "development") {
    app.use(express.static(path.join(__dirname, "../../frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../../frontend", "dist", "index.html"))
    })
}

server.listen(PORT, (req, res) => {
    console.log(`Server is listening on port ${PORT} `)
    connectDB();
})