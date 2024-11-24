import express from 'express'; //web framework for building apis giving routes, middleware
import authRoutes from "./routes/auth.route.js"


const app = express();


app.use('/api/auth',authRoutes)
app.listen(5001, (req, res) => {
    console.log(`Server is listening on port 5001 `)
})