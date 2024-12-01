import express from "express"; //web framework for building apis giving routes, middleware
import authRoutes from "./routes/auth.route.js"
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js";


dotenv.config();
const app = express();

const PORT = process.env.PORT;
app.use(express.json());
 
app.use("/api/auth", authRoutes)


app.listen(PORT, (req, res) => {
    console.log(`Server is listening on port ${PORT} `)
    connectDB();
})