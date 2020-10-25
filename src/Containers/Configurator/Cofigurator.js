import React, { Component } from 'react';
import Auxillary from '../../HOC/Auxillary';
import Visaulization from '../../Components/Burger/Visualization/Visualization';
import AddIngredients from '../../Components/Burger/AddIngredients/AddIngredients'

const PRICING = {
  beef:1.3,
  cheese:0.4,
  bacon:0.7,
  lettuce:0.5,
  'bottom bun':0.2
}


class Configurator extends Component {
  state = { 
    ingredientList: [  
    ],
    isGlutenFree:false,
    totalPrice:4,
  }

  addedIng = ingType =>{
    console.log(ingType)
    const newList = [...this.state.ingredientList];
    newList.unshift({type:ingType, cost:PRICING[ingType]});
    const newTotal = this.state.totalPrice + PRICING[ingType];
    this.setState({ingredientList: newList, totalPrice:newTotal})
  }
  removeIng = ingType =>{
    const newList = [...this.state.ingredientList];
    const ind = newList.findIndex(item => item.type === ingType);
    if(ind=== -1) return;
    newList.splice(ind,1);
    const newTotal = this.state.totalPrice - PRICING[ingType];
    this.setState({ingredientList: newList, totalPrice:newTotal})
  }
  toggleBuns = (event) =>{
    const bunStatus = event.target.checked
    this.setState({isGlutenFree: bunStatus});
  }

  
  render(){ 

    return (
        <Auxillary>
          <h3 style={{textAlign:'center'}}> Price: ${this.state.totalPrice.toFixed(2)}</h3>   
          <Visaulization ingredientList={this.state.ingredientList} isGlutenFree={this.state.isGlutenFree} />
          <AddIngredients addedIng={this.addedIng}  removedIng={this.removeIng} toggleBuns={this.toggleBuns} arr={this.state.ingredientList} />
        </Auxillary>
    )}
}
 
export default Configurator;