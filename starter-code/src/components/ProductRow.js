import React from 'react'

const ProductRow = props => {

  return(
    
    <tr>
      <td className={props.classRed}>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  
  )
}

export default ProductRow