import React, { createContext, useContext, useEffect, useState } from 'react'
import { authDataContext } from './AuthContext';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const listingDataContext = createContext()
const ListingContext = ({children}) => {

  let navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("");
    const [frontedEndImage1, setFrontedEndImage1] = useState(null);
    const [frontedEndImage2, setFrontedEndImage2] = useState(null);
    const [frontedEndImage3, setFrontedEndImage3] = useState(null);
    const [backEndImage1, setbackEndImage1] = useState(null);
    const [backEndImage2, setbackEndImage2] = useState(null);
    const [backEndImage3, setbackEndImage3] = useState(null);
    const [rent, setRent] = useState("");
    const [city, setCity] = useState("");
    const [landmark, setLandMark] = useState("");
    const [category, setCategory] = useState("");
    const [adding, setAdding] = useState(false);
    const [updating,setUpdating ] = useState(false);
    const [deleteing, setDeleteing] = useState(false);
    const [listingdata, setlistingData] = useState([]);
    const [newlistingdata, setnewlistingData] = useState([]);
    const [cardDetails, setCardDetails] = useState(null);
    const [searchData, setSearchData] = useState([]);
    let {serverUrl} = useContext(authDataContext) 

    
    const handleAddListing = async()=>{
      setAdding(true)
        try {
            let formData = new FormData()
            formData.append("title",title)
            formData.append("image1",backEndImage1)
            formData.append("image2",backEndImage2)
            formData.append("image3",backEndImage3)
            formData.append("description",description)
            formData.append("rent",rent)
            formData.append("city",city)
            formData.append("landMark",landmark)
            formData.append("category",category)

            let result = await axios.post(serverUrl + "/api/listing/add",formData,{withCredentials:true})
            setAdding(false)
            console.log(result);
            navigate("/")
            toast.success("Adding Listing")
            setTitle("")
            setDescription("")
            setFrontedEndImage1(null)
            setFrontedEndImage2(null)
            setFrontedEndImage3(null)
            setbackEndImage1(null)
            setbackEndImage2(null);
            setbackEndImage3(null);
            setRent("")
            setCity("")
            setLandMark("")
            setCategory("")

        } catch (error) {
          setAdding(false)
            console.log(error);
            toast.error(error.response.data.message)
        }
    }



    const handleViewCard = async(id)=>{
      try {
        let result = await axios.get(serverUrl + `/api/listing/findlistingByid/${id}`,{withCredentials:true})
        console.log(result);
        setCardDetails(result.data)
        navigate("/viewcard")
      } catch (error) {
        console.log(error);
      }
    }

    // const handleSearch = async (data) =>{
    //     try {
    //       let result = await axios.get(serverUrl + `/api/listing/search?query=${data}`)
    //       setSearchData(result.data)
    //     } catch (error) {
    //       setSearchData(null)
    //       console.log(error);
          
    //     }
    // }

    const handleSearch = async (data) => {
      const trimmed = data.trim();
      if (!trimmed) {
        console.warn("Empty search query, skipping request.");
        return;
      }
    
      try {
        let result = await axios.get(`${serverUrl}/api/listing/search?query=${trimmed}`);
        setSearchData(result.data);
      } catch (error) {
        setSearchData([]);
        console.error("Search failed:", error);
      }
    };
    

     
    const getListing = async ()=>{
      try {
        let result = await axios.get(serverUrl + "/api/listing/get",{withCredentials:true})
        setlistingData(result.data)
        setnewlistingData(result.data)
      } catch (error) {
        console.log(error);
        
      }
    }
     

    useEffect(()=>{
      getListing()
    },[adding,updating,deleteing])

    let value ={
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
         handleAddListing,
         adding, setAdding,
         listingdata,setlistingData,
         newlistingdata, setnewlistingData,
         getListing,
         handleViewCard,
         updating, setUpdating,
         deleteing, setDeleteing,
         cardDetails, setCardDetails,
         handleSearch,
         searchData, setSearchData

       
    }
  return (
    <div>
      <listingDataContext.Provider value={value}>
        {children}
      </listingDataContext.Provider>
    </div>
  )
}

export default ListingContext
