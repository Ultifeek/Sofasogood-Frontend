import React, { useState } from 'react'
import "./Nav.css";
import { Component } from 'react'
import menu from "../assets/menu-line.svg";
import close from "../assets/Close.svg";
import user from "../assets/user.svg";
import cart from "../assets/shopping-cart-line.svg";
import heart from "../assets/heart.svg";
import search from "../assets/search.svg";
import shop from "../assets/Shop.svg";
import blog from "../assets/Blog.svg";
import contact from "../assets/contact.svg";
import { Link } from 'react-router-dom';



function Navs() {
    // for the mobile menu
    const [clicked, setClicked] = useState(false)
    const handleClick = () =>{
             setClicked(!clicked)
          }
    
    // To highlight the current page we are in

    const page = []

    const [currentPage, setCurrentPage] = useState(page);

  


    const handlePageChange = (page) => {
        setCurrentPage(page)
    };

    



     return (
         <>
         <nav>
             <a href='#'>
             <img src="public/png/LOGO.png" alt="" className='navlogo'/>
             </a>
     
             <div>
                 <ul id='navbar' className={clicked ? "#navbar active":"#navbar"}>
                     <li>
                        <Link to="/home" className={currentPage === 'home' ? 'active': ''} onClick={()=> handlePageChange('home')}>
                         <img src={user} alt="" className='icons hide'/> home
                        </Link>
                     </li>
                     <li>
                        <Link to="/product" className={currentPage === 'product' ? 'active': ''} onClick={()=> handlePageChange('product')}>
                             <img src={shop} alt="" className='icons'/> shop
                        </Link>
                     </li>
                     <li>
                        <Link to="/blog" className={currentPage === 'blog' ? 'active': ''} onClick={()=> handlePageChange('blog')}
                        > <img src={blog} alt="" className='icons'/> blog </Link>
                     </li>
                     <li>
                         <Link to="/contact" className={currentPage === 'contact' ? 'active': ''} onClick={()=> handlePageChange('contact')}
                         > <img src={contact} alt="" className='icons'/> contact us</Link>
                     </li>
                 </ul>
             </div>
             <div id="mobile" onClick={handleClick}> 

                 {clicked ? (<img src={close} alt=""/>) : (<img src={menu} alt=""/>) }
                 
                 {/* <i id='bar' className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i> */}
                
             </div>
             <div className='nav-icons'>
               <a href='#'>
                <img src={user} alt="" />
                </a>
               <a href='#'>
                <img src={cart} alt="" />
                </a>
               <a href='#'>
                <img src={heart} alt="" />
                </a>
               <a href='#'>
                <img src={search} alt="" />
                </a>

             </div>
         </nav>
         </>
       )
 }
// }

export default Navs