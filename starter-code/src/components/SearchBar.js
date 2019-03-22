import React, {Component} from 'react'
import ProductTable from './ProductTable'

class SearchBar extends Component {

  constructor() {
    
    super()

    this.state = {

      query: "",
      checkIfStock: false

    }
  }



  // HANDLERS -----------------------------------------------------------------------------------

  handleChange = e => {
    let {name, value} = e.target
    this.setState({[name]: value})
  }


  render(){
    return(
      <section>
      <form action="javascript:;">
        <input onChange={this.handleChange} type="text" name="query" placeholder="Search a product" value={this.state.query}/><br/><br/>
        <input type="checkbox" name="checkIfStock" value={this.state.checkIfStock}/>
        <label htmlFor="checkIfStock">Only show product on stock</label>
      </form>
      <ProductTable />
      </section>
    
      )
  }  

}

export default SearchBar