import React, { useState } from 'react'
import Navs from '../../Navigation/Nav'
import Footer from '../../Footer/footer'
import Card from '../../components/Card'
// import {blogsDB} from '../../db/db.jsx'
import { blogsDB } from '../../db/db'
import './blogs.css'



function Blogs() {

    const [query, setQuery] = useState("")

    const handleInputChange = event =>{
      setQuery(event.target.value)
    };

    const filteredItems = blogsDB.filter((blogItem) =>
    blogItem.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1);

    function filteredData(blogsDB, query){
      let filteredBlog = blogsDB

      if (query){
        filteredBlog = filteredItems
      }
      return filteredBlog.map(
        ({img, title, date, repost, comment, detail}, index ) => (
          <Card className = "blogCards"
          styles= "blogCard"
          key={index}
          date={date}
          img={img}
          title={title}
          report={repost}
          comment={comment}
          detail={detail} 
          />
        )
    )
    }
    const result = filteredData(blogsDB, query);


  return (
    <>
        <Navs/>
        <h1>Blogs</h1>
        <center className='MobileSearch'>
          <input type="text" placeholder='Search blog...' onChange ={handleInputChange} value={query} />
        </center>
        <div className='blogMainContain'>
            <div className='blogLeftDiv'>
                <input type="text" placeholder='Search blog...' onChange ={handleInputChange} value={query} />

                <div>
                    <h2>TAGS</h2>
                    <div>
                      <button>Architecture</button>
                      <button>Bedroom</button>
                      <button>Living room</button>
                      <button>Lifestyle</button>
                      <button>Design</button>
                      <button>Furniture maintainance</button>
                      <button>Interior</button>
                      <button>Sofa</button>
                      <button>Art</button>
                    </div>
                </div>
              </div>
            <div>
              
                <div className='blogCardContain'>
                    {result}

                </div>
             
            </div>
            
        </div>

        <div className='blogDownDiv'>
                    <h2>TAGS</h2>
                    <div>
                      <button>Architecture</button>
                      <button>Bedroom</button>
                      <button>Living room</button>
                      <button>Lifestyle</button>
                      <button>Design</button>
                      <button>Furniture maintainance</button>
                      <button>Interior</button>
                      <button>Sofa</button>
                      <button>Art</button>
                    </div>
                </div>
        
        <Footer/>
    </>
  )
}

export default Blogs