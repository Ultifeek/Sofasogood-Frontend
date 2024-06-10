import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Blogs from './Pages/Blogs/Blogs';
import NoPage from './Pages/NoPage/NoPage';
import Products from './Pages/Products/Products';
import Contact from './Pages/Contact/Contact';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path ="/home" element={<Home/>}/>
          <Route path ="/blog" element={<Blogs/>}/>
          <Route path ="/product" element={<Products/>}/>
          <Route path ="/contact" element={<Contact/>}/>
          <Route path ="*" element={<NoPage/>}/>
         {/* <Route exact path ="/" element={<Home/>}/> */}
        </Routes>
      </Router>
        {/* <Home/> */}
    </>
  )
}

export default App
