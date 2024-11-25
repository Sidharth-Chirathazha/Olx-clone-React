import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Menubar from './Menubar'
import Home from './Home';
import Footer from './Footer';
import { collection,getDocs } from 'firebase/firestore';
import { db } from '../firebase/setup';

const Head = () => {

  const [prod,setProd] = useState([]);
  const [search,setSearch] = useState("");
  const [menu,setMenu] = useState("");

  const getProducts = async()=>{
    const querySnapshot = await getDocs(collection(db,"products"));
    const firebaseProducts = [];
    querySnapshot.forEach((doc)=>{
      firebaseProducts.push({id:doc.id,...doc.data()});
    });
    setProd(firebaseProducts);
  }

  useEffect(()=>{
    getProducts()
  },[]);

  return (
    <div>
        <Navbar setSearch={setSearch}/>
        <Menubar setMenu={setMenu}/>
        <Home products={prod} search={search} menu={menu}/>
        <Footer/>
    </div>
  )
}

export default Head