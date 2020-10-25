import React, { Component } from 'react';
import Auxillary from '../../HOC/Auxillary';
import Visaulization from '../../Components/Burger/Visualization/Visualization';
import AddIngredients from '../../Components/Burger/AddIngredients/AddIngredients'

const PRICING = {
  beef:1.3,
  cheese:0.4,
  bacon:0.7,
  lettuce:0.5
}

class Configurator extends Component {
  state = { 
    ingredientList: [  
    ],
    isGluttenFree:false,
    totalPrice:4
  }

  addedIng = ingType =>{
    const newList = [...this.state.ingredientList];
    newList.unshift({type:ingType, cost:PRICING[ingType]});
    const newTotal = this.state.totalPrice + PRICING[ingType];
    this.setState({ingredientList: newList, totalPrice:newTotal})
  }
  removeIng = ingType =>{
    const newList = [...this.state.ingredientList];
    const ind = newList.findIndex(item => item.type === ingType);
    newList.splice(ind,1);
    const newTotal = this.state.totalPrice - PRICING[ingType];
    this.setState({ingredientList: newList, totalPrice:newTotal})
  }

  render(){ 
    return (
        <Auxillary>
          <Visaulization ingredientList={this.state.ingredientList} isGluttenFree={this.state.isGluttenFree} price={this.state.totalPrice}/>
          <AddIngredients addedIng={this.addedIng} removedIng={this.removeIng}/>
        </Auxillary>
    )}
}
 
export default Configurator;