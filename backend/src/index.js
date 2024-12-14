import express from "express"; //web framework for building apis giving routes, middleware
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors";
import { connectDB } from "./lib/db.js";
import bodyParser from 'body-parser';
import { app,server } from "./lib/socketio.js";

dotenv.config();

const PORT = process.env.PORT;

app.use(bodyParser.json({ limit: "10mb" })); // Adjust the limit as needed
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true
    }))

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)


server.listen(PORT, (req, res) => {
    console.log(`Server is listening on port ${PORT} `)
    connectDB();
})