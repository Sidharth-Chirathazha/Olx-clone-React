import React, { useEffect, useState } from 'react'
import olx from '../assets/olx.png'
import lens from '../assets/lens.png'
import arrow from '../assets/arrow.png'
import Login from './Login'
import { auth } from '../firebase/setup'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = (props) => {

  const [loginPop,setLoginPop] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const curUser = auth.currentUser

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        console.log("Current user:", currentUser);
        setUser(currentUser);
    });
    return()=>unsubscribe();

  },[])

  const handleLogout = async() =>{
    try {
        await signOut(auth);
        alert("Logged out successfully");
        navigate('/');
    } catch (error) {
        console.error("Logout error:", error.message);
    }
  }

  const handleSellClick = ()=>{
    if (curUser){
        navigate('/add-product');
    }else{
        navigate('/')
        alert("Please Login")
    }
  }

  return (
    <>
        <div className="sticky top-0 z-50 w-full bg-slate-100 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between p-4 gap-4">
            <img
              onClick={()=>navigate('/')} 
              src={olx} 
              className="w-11 h-9 cursor-pointer hover:opacity-80 transition-opacity" 
              alt="OLX Logo"
            />

            <div className="flex border-2 border-black hover:border-blue-500 transition-colors rounded w-64 p-2 bg-white">
              <img src={lens} className="w-6 h-5 mt-1" alt="Search Icon" />
              <input 
                placeholder="Location" 
                className="ml-3 outline-none flex-1"
              />
              <img src={arrow} className="w-8 h-7 cursor-pointer" alt="Arrow" />
            </div>

            <div className="flex-1 flex h-12 border-2 border-black hover:border-blue-500 transition-colors rounded bg-white">
              <input 
                onChange={(e) => props.setSearch(e.target.value)}
                placeholder="Find Cars, Mobile phones and more." 
                type="text" 
                className="ml-3 w-full outline-none"
              />
              <div className="px-3 flex items-center">
                <img src={lens} className="w-6 h-6 cursor-pointer" alt="Search" />
              </div>
            </div>

            <div className="flex h-12 p-3 cursor-pointer group items-center">
              <h1 className="font-semibold group-hover:text-blue-600 transition-colors">ENGLISH</h1>
              <img src={arrow} className="w-8 h-7 ml-1" alt="Language" />
            </div>

            {user ? (
              <div className="flex items-center gap-4">
                <h1 className="font-semibold truncate max-w-[200px]">{user.email}</h1>
                <button
                  onClick={handleLogout}
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div 
                onClick={() => setLoginPop(!loginPop)} 
                className="flex h-12 p-3 cursor-pointer group"
              >
                <h1 className="font-bold text-lg group-hover:text-blue-600 transition-colors">Login</h1>
              </div>
            )}

            <button
              onClick={handleSellClick}
              className="flex items-center justify-center w-28 h-12 rounded-full border-2 border-yellow-500 bg-white hover:bg-yellow-50 transition-all transform hover:scale-105"
            >
              <span className="font-bold text-lg">+ SELL</span>
            </button>
          </div>
        </div>
      </div>
      {loginPop && <Login setLoginPop={setLoginPop} />}
    </>
  )
}

export default Navbar