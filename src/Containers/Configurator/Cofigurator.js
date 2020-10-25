import React, { Component } from 'react';
import Auxillary from '../../HOC/Auxillary';
import Visaulization from '../../Components/Burger/Visualization/Visualization'

class Configurator extends Component {
  state = { 
    ingredientList: [
      {type:'bread-top'},
      {type:'cheese'},   
      {type:'meat'},   
      {type:'bread-bottom'},
    ],

  }

  render(){ 
    return (
        <Auxillary>
          <Visaulization ingredientList={this.state.ingredientList}/>
          <div>Controls to add ingredients</div>
        </Auxillary>
    )}
}
 
export default Configurator;