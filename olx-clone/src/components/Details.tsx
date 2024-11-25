import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';

const Details = () => {

  const location = useLocation();

  console.log(location);
  

  return (
    <>
        <Navbar/>
        <div className="flex justify-between p-6">
        <div className="w-full md:w-2/3 md:pr-8">
            <img
            src={location?.state?.data?.image}
            alt={location?.state?.data?.title}
            className=" w-1/2  object-cover rounded-lg"
            />
        </div>
        <div className="w-full md:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-4">
            <h1 className="font-bold text-3xl">₹ {location?.state?.data?.price}</h1>
            <p className="text-gray-500 mt-2">{location?.state?.data?.category}</p>
            <h1 className="font-bold text-2xl mt-4">{location?.state?.data?.title}</h1>
            <p className="text-gray-500 mt-2">{location?.state?.data?.description}</p>
            <div className="mt-6">
                <p className="text-gray-500">Posted in</p>
                <p>Location</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 w-full">
                Chat with seller
            </button>
            </div>
        </div>
        </div>
        <Footer/>
    </>
  )
}

export default Details