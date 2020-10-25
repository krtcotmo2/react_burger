import React, { Component } from 'react';
import Auxillary from '../../HOC/Auxillary';
import Visaulization from '../../Components/Burger/Visualization/Visualization';
import AddIngresients from '../../Components/Burger/AddIngredients/AddIngredients'

class Configurator extends Component {
  state = { 
    ingredientList: [
      {type:'lettuce', cost:.5}, 
      {type:'bacon', cost:1.99},  
      {type:'cheese', cost:1}, 
      {type:'cheese', cost:1},   
      {type:'meat', cost:5.99},  
      {type:'meat', cost:5.99},   
    ],
    isGluttenFree:false,
  }

  render(){ 
    return (
        <Auxillary>
          <Visaulization ingredientList={this.state.ingredientList} isGluttenFree={this.state.isGluttenFree}/>
          <AddIngresients/>
        </Auxillary>
    )}
}
 
export default Configurator;