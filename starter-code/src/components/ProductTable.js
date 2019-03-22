import React from 'react'
import ProductRow from './ProductRow'
import data from '../data.json'

const ProductTable = () => {
  return(
  
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
        </tr>
        </thead>
      <tbody>
      {data.data.map((products, index) => {
        
        if(products.stocked) return (<ProductRow key={index} name={products.name} price={products.price}/>)
        else return (<ProductRow classRed="red" key={index} name={products.name} price={products.price}/>)
        
        })}
      </tbody>
    </table>

  )
  
}

export default ProductTable