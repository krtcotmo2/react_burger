import React, { Component } from 'react';
import Auxillary from '../../HOC/Auxillary';
import Visaulization from '../../Components/Burger/Visualization/Visualization';
import AddIngresients from '../../Components/Burger/AddIngredients/AddIngredients'

class Configurator extends Component {
  state = { 
    ingredientList: [
      
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