import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();


//Signup Route
router.post('/signup', signup)

//login Route
router.post('/login', login)

//logout Route 
router.post('/logout', logout)

export default router;