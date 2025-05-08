import React, { createContext, useContext, useState } from 'react'
import { authDataContext } from './AuthContext';
import axios from 'axios';
import { userDataContext } from './UserContext';
import { listingDataContext } from './ListingContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export const bookingDataContext = createContext()
const BookingContext = ({children}) => {
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [total, setTotal] = useState(0);
    const [night, setNight] = useState(0);
    const [bookingData, setBookingData] = useState([]);
    const [booking, setbooking] = useState(false);
    let {serverUrl} = useContext(authDataContext)
    let {getCurrentUser} = useContext(userDataContext)
    let {getListing} = useContext(listingDataContext)
    let navigate = useNavigate()

    const handleBooking = async (id) => {
        setbooking(true)
        try {
            let result = await axios.post(serverUrl + `/api/booking/create/${id}`,{
                checkIn,checkOut,totalRent:total
            },{withCredentials:true})
            await getCurrentUser()
            await getListing()
            setBookingData(result.data)
            console.log(result.data);
            setbooking(false)
            navigate("/booked")
            toast.success("Booking successfully")

            
        } catch (error) {
            console.log(error);
            setBookingData(null)
           // setbooking(false) 
           toast.error(error.response.data.message)
                      
        }
    }

    const cancelBooking = async (id) => {
       try {
            let result = await axios.delete(serverUrl + `/api/booking/cancel/${id}`,{withCredentials:true})
            await getCurrentUser()
            await getListing()
            console.log(result.data);
            toast.success("CancelBooking successfully")

       } catch (error) {
        console.log(error);
       toast.error(error.response.data.message)

        
       }
        
    }


    let value ={
        checkIn, setCheckIn,
        checkOut, setCheckOut,
        total, setTotal,
        night, setNight,
        bookingData, setBookingData,
        handleBooking,
        cancelBooking,
        booking, setbooking
        
    }
  return (
    <div>
        <bookingDataContext.Provider value={value}>
           {children}
        </bookingDataContext.Provider>
      
    </div>
  )
}

export default BookingContext
