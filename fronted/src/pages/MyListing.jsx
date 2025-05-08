import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
import { userDataContext } from '../Context/UserContext';
import Card from '../Component/Card';

const MyListing = () => {
  let navigate = useNavigate()
  let {userData} = useContext(userDataContext)
      // const [title, setTitle] = useState("")
      // const [description, setDescription] = useState("");
      // const [frontedEndImage1, setFrontedEndImage1] = useState(null);
      // const [frontedEndImage2, setFrontedEndImage2] = useState(null);
      // const [frontedEndImage3, setFrontedEndImage3] = useState(null);
      // const [backEndImage1, setbackEndImage1] = useState(null);
      // const [backEndImage2, setbackEndImage2] = useState(null);
      // const [backEndImage3, setbackEndImage3] = useState(null);
      // const [rent, setRent] = useState("");
      // const [city, setCity] = useState("");
      // const [landmark, setLandMark] = useState("");
   //   const [category, setCategory] = useState("");
  return (
    <div className='w-[100vw] min-h-[100vh] flex items-center justify-start flex-col gap-[50px] relative px-[20px]'>
      <div className="w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[10%] left-[20px] rounded-[50%] flex items-center justify-center" onClick={()=>navigate("/")}><FaArrowLeftLong  className="w-[25px] h-[25px] text-[white]"/>
      </div>

      <div className='w-[60%] h-[10%] border-[2px] border-[#908c8c] p-[15px] flex items-center justify-center text-[30px] rounded-md text-[#613b3b] font-semibold mt-[50px] md:w-[600px] text-nowrap '>MY LISTING
      </div>

      <div className='w-[100%] h-[90%] flex items-center justify-center gap-[25px] flex-wrap mt-[30px]'>
        {userData.listing.map((list)=>(
          <Card title={list.title} landMark={list.landMark} city={list.city} image1={list.image1} image2={list.image2} image3={list.image3} rent={list.rent} id={list._id} isBooked={list.isBooked} ratings={list.ratings} host={list.host} />
        ))}
        
      </div>
    </div>
  )
}

export default MyListing
