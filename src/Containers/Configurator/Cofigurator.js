import React, { Component } from 'react';
import Auxillary from '../../HOC/Auxillary';
import Visaulization from '../../Components/Burger/Visualization/Visualization'

class Configurator extends Component {
  state = { 

  }

  render(){ 
    return (
        <Auxillary>
          <Visaulization/>
          <div>Controls to add ingredients</div>
        </Auxillary>
    )}
}
 
export default Configurator;