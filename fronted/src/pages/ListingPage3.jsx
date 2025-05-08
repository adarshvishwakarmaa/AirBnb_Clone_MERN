import React, { useContext } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { listingDataContext } from '../Context/ListingContext'


const ListingPage3 = () => {
  let navigate = useNavigate()
    let  {
          title, setTitle,
          description,setDescription,
          frontedEndImage1,setFrontedEndImage1,
          frontedEndImage2,setFrontedEndImage2,
          frontedEndImage3,setFrontedEndImage3,
          backEndImage1,setbackEndImage1,
          backEndImage2,setbackEndImage2,
          backEndImage3,setbackEndImage3,
          rent,setRent,
          city,setCity,
          landmark,setLandMark,
          category,setCategory,
          adding, setAdding,
          handleAddListing
        } = useContext(listingDataContext)
  return (
    <div className='w-[100%] h-[100vh] bg-white flex items-center justify-center flex-col gap-[10px] relative overflow-auto'>
      <div className='w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[5%] left-[20px] rounded-[50%] flex items-center justify-center' 
        onClick={() => navigate("/listingpage2")}><FaArrowLeftLong className="w-6 h-6 text-white" />
      </div>

      <div className='w-[95%] flex items-start justify-start text-[25px] md:w-[80%] mb-[10px]'>
        <h1 className='text-[20px] text-[#272727] md:text-[30px] text-ellipsis text-wrap overflow-hidden px-[70px] md:px-[0px]'>
          {`In ${landmark.toUpperCase()},${city.toUpperCase()}`}
        </h1>
      </div>

      <div className='w-[95%] h-[400px] flex items-center justify-center flex-col md:w-[80%] md:flex-row'>
        <div className='w-[100%] h-[65%] md:w-[70%] md:h-[100%] overflow-hidden flex items-center justify-center border-[2px] border-[white]'>
          <img src={frontedEndImage1} alt="" className='w-[100%]'/>
        </div>

        <div className='w-[100%] h-[50%] flex items-center justify-center md:w-[50%] md:h-[100%] md:flex-col'>

          <div className='w-[100%] h-[100%] overflow-hidden flex items-center justify-center border-[2px]'>
            <img src={frontedEndImage2} alt="" className='w-[100%]'/>
          </div>

          <div className='w-[100%] h-[100%] overflow-hidden flex items-center justify-center border-[2px]'>
            <img src={frontedEndImage3} alt="" className='w-[100%]'/>

          </div>
        </div>

      </div>

      <div className='w-[95%] flex items-start justify-start text-[18px] md:w-[80%] md:[25px]'> 
          {`${title.toUpperCase()} ,${category.toUpperCase()}, ${landmark.toUpperCase()}`}
      </div>

      <div className='w-[95%] flex items-start justify-start text-[18px] md:w-[80%] md:[25px] text-gray-800 '> 
          {`${description.toUpperCase()}`}
      </div>

      <div className='w-[95%] flex items-start justify-start text-[18px] md:w-[80%] md:[25px]'> 
          {`Rs.${rent}/day`}
      </div>

      <div className='w-[95%] h-[50px] flex items-start justify-start px-[110px]'>
        <button className="px-[50px] py-[10px] bg-[red] text-[white] text-[18px] md:px[100px] rounded-lg" onClick={handleAddListing} disabled={adding}>{adding? "adding....":"Add Listing"}</button>

      </div>

    </div>
  )
}

export default ListingPage3
