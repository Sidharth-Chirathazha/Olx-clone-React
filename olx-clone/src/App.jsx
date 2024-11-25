import { Route, Routes } from 'react-router-dom'
import './App.css'
import Head from './components/Head'
import Details from './components/Details'
import AddProduct from './components/AddProduct'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Head/>}/>
      <Route path='/details' element={<Details/>}/>
      <Route path='/add-product' element={<AddProduct/>}/>
    </Routes>
    </>
  )
}

export default App
