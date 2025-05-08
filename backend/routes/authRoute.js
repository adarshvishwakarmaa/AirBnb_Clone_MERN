import express from 'express'
import { login, logout, signUp } from '../controller/authController.js'


const authRouter = express.Router()

authRouter.post("/signup",signUp)
authRouter.post("/login",login)
authRouter.post("/logout",logout)


export default authRouter