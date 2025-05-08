import express from "express"
import isAuth from "../middlewares/isAuth.js"
import { cancelBooking, createBooking } from "../controller/bookingController.js"

let bookingRouter = express.Router()

bookingRouter.post("/create/:id",isAuth,createBooking)
bookingRouter.delete("/cancel/:id",isAuth,cancelBooking)



export default bookingRouter
