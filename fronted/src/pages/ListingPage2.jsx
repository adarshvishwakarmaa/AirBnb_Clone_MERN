import React, { useContext } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { GiFamilyHouse } from "react-icons/gi";
import {   GiWoodCabin } from "react-icons/gi";
import {  MdBedroomParent, MdOutlinePool } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoBedOutline } from "react-icons/io5";
import { FaTreeCity } from "react-icons/fa6";
import { BiBuildingHouse } from "react-icons/bi";
import { BsPersonFillLock } from "react-icons/bs";
import { listingDataContext } from '../Context/ListingContext';


const ListingPage2 = () => {
    let navigate = useNavigate()
    let {category,setCategory} = useContext(listingDataContext)
   return (
    <div className='w-[100%] h-[100vh] bg-white flex items-center justify-center relative overflow-auto'>
        <div className='w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[5%] left-[20px] rounded-[50%] flex items-center justify-center' 
            onClick={() => navigate("/listingpage1")}><FaArrowLeftLong className="w-6 h-6 text-white" />
       </div>
        
       <div className='w-[200px] h-[50px] text-[20px] bg-[#f14242] text-[white] flex items-center justify-center rounded-[30px] absolute top-[5%] right-[10px] shadow-lg'>
            SetUp Your Category
        </div>  

        <div className='max-w-[900px] w-[100%] h-[550px] overflow-auto bg-white flex items-center justify-start flex-col gap-[40px] mt-[30px]'>
        <h1 className='text-[18px] text-[black] md:text-[30px] px-[10px]'>Select Which of these best describe your place?</h1>
            

        <div className='max-w-[900px] w-[100%] h-[100%]  flex flex-wrap items-center justify-center gap-[15px] md:w-[70%]'>

            <div className={`w-[180px] h-[100px]  flex  items-center justify-center flex-col cursor-pointer border-2 hover:border-[#a6a5a5] text-[16px] rounded-lg ${category=="villa"?"border-[#8b8b8b]":""}`} onClick={()=>setCategory("villa")}>
                    <GiFamilyHouse className='w-8 h-8 text-black' />
                    <h3 className='text-center'>Villa</h3>
            </div>

            <div className={`w-[180px] h-[100px]  flex  items-center justify-center flex-col cursor-pointer border-2 hover:border-[#a6a5a5] text-[16px] rounded-lg ${category=="farmhouse"?"border-[#8b8b8b]":""}`} onClick={()=>setCategory("farmhouse")} >
                    <FaTreeCity className='w-8 h-8 text-black' />
                    <h3 className='text-center'>Farm House</h3>
            </div>

            <div className={`w-[180px] h-[100px]  flex  items-center justify-center flex-col cursor-pointer border-2 hover:border-[#a6a5a5] text-[16px] rounded-lg ${category=="flat"?"border-[#8b8b8b]":""}`} onClick={()=>setCategory("flat")}>
                    <BiBuildingHouse className='w-8 h-8 text-black' />
                    <h3 className='text-center'>Flat</h3>
            </div>

            <div className={`w-[180px] h-[100px]  flex  items-center justify-center flex-col cursor-pointer border-2 hover:border-[#a6a5a5] text-[16px] rounded-lg ${category=="room"?"border-[#8b8b8b]":""}`} onClick={()=>setCategory("room")}>
                    <IoBedOutline className='w-8 h-8 text-black' />
                    <h3 className='text-center'>Rooms</h3>
            </div>

            <div className={`w-[180px] h-[100px]  flex  items-center justify-center flex-col cursor-pointer border-2 hover:border-[#a6a5a5] text-[16px] rounded-lg ${category=="shops"?"border-[#8b8b8b]":""}`} onClick={()=>setCategory("shops")}>
                    <SiHomeassistantcommunitystore className='w-8 h-8 text-black' />
                    <h3 className='text-center'>Shops</h3>
            </div>

            <div className={`w-[180px] h-[100px]  flex  items-center justify-center flex-col cursor-pointer border-2 hover:border-[#a6a5a5] text-[16px] rounded-lg ${category=="pg"?"border-[#8b8b8b]":""}`} onClick={()=>setCategory("pg")}>
                    <MdBedroomParent className='w-8 h-8 text-black' />
                    <h3 className='text-center'>PG</h3>
            </div>

            <div className={`w-[180px] h-[100px]  flex  items-center justify-center flex-col cursor-pointer border-2 hover:border-[#a6a5a5] text-[16px] rounded-lg ${category=="security"?"border-[#8b8b8b]":""}`} onClick={()=>setCategory("security")}>
                    <BsPersonFillLock className='w-8 h-8 text-black' />
                    <h3 className='text-center'>Security</h3>
            </div>

            <div className={`w-[180px] h-[100px]  flex  items-center justify-center flex-col cursor-pointer border-2 hover:border-[#a6a5a5] text-[16px] rounded-lg ${category=="poolhouse"?"border-[#8b8b8b]":""}`} onClick={()=>setCategory("poolhouse")}>
                    <MdOutlinePool className='w-8 h-8 text-black' />
                    <h3 className='text-center'>Pool House</h3>
            </div>

            <div className={`w-[180px] h-[100px]  flex  items-center justify-center flex-col cursor-pointer border-2 hover:border-[#a6a5a5] text-[16px] rounded-lg ${category=="cabin"?"border-[#8b8b8b]":""}`} onClick={()=>setCategory("cabin")}>
                    <GiWoodCabin className='w-8 h-8 text-black' />
                    <h3 className='text-center'>Cabin</h3>
            </div>

         
            
        </div>  
        </div> 
        <button className="px-[50px] py-[10px] bg-[red] text-[white] text-[18px] md:px[100px] rounded-lg mt-[20px] absolute right-[5%] bottom-[5%]" onClick={()=>navigate("/listingpage3")} disabled={!category}>
               Next
           </button> 
    </div>
  )
}

export default ListingPage2
