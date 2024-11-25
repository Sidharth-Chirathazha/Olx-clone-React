import React, { useState } from 'react'
import Navbar from './Navbar';
import Footer from './Footer'
import axios from 'axios'
import { collection,addDoc } from 'firebase/firestore';
import { db } from '../firebase/setup';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

  const [formData,setFormData] = useState({
    title:'',
    price:'',
    category:'',
    description:'',
    image: null,
  });

  const navigate = useNavigate();

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setFormData({...formData,[name]:value})
  }

  const handleImageChange = (e)=>{
    setFormData({...formData,image:e.target.files[0]})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    
    try {

      const formDataForCloudinary = new FormData();
      formDataForCloudinary.append("file",formData.image);
      formDataForCloudinary.append("upload_preset", "olx-clone");

      const cloudinaryResponse = await axios.post(
        "https://api.cloudinary.com/v1_1/dz9kgofdy/image/upload", // Replace with your Cloudinary URL
         formDataForCloudinary
      );
      console.log("Cloudinary response:", cloudinaryResponse.data);

      const imageUrl = cloudinaryResponse.data.secure_url;

      const productData = {
        title:formData.title,
        price:formData.price,
        category:formData.category,
        description:formData.description,
        image:imageUrl,
        createdAt:new Date()
      }

      const docRef = await addDoc(collection(db,'products'),productData);
      console.log("Product added with ID:", docRef.id);

      setFormData({
        title: '',
        price: '',
        category: '',
        description: '',
        image: null,
      });

      alert("Product added successfully!");
      navigate('/');
      
    } catch (error) {
      console.error("Error adding product:", error.message);
      alert(`Failed to add product: ${error.message}`);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 w-full max-w-2xl mx-auto mt-8 mb-16">
        <h1 className="text-2xl font-bold mb-6">Add a Product</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Product Title"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Category"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="4"
              required
            />
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              className="w-full p-3 border rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default AddProduct