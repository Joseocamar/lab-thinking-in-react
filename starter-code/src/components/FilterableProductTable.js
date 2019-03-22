import React, {Component} from 'react'
import SearchBar from './SearchBar'
import data from '../data.json'


class FilterableProductTable extends Component {
  
  constructor(){
    
    super()

    this.state = {

      dataArr: new Object (data)

    }
  
  }

  //HANDLERS--------------------------------------------------------------------------------------------
  
  
  render(){
      
    return (
        <main>
        
          <SearchBar />

        </main>
      )
    }

}

export default FilterableProductTable