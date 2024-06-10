import React from 'react'
import Navs from '../../Navigation/Nav'
import Footer from '../../Footer/footer'
import './products.css'
import { productsDB } from '../../db/db'
import Card from '../../components/Card'

function Products() {
  return (
    <>
        <Navs/>
        <h1>Products</h1>
        
        <div className='productsCard'>
            {productsDB.map(
                ({img, title, newPrice}, index) => (
                    <Card className = 'featureDealCard'
                    styles= "product"
                    key={index}
                    img = {img}
                    title={title}
                   
                    newPrice = {newPrice}
                    />
                ))}
        </div>
        
        <Footer/>
    </>
  )
}

export default Products