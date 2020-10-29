import React, { Component } from 'react';
import Auxillary from '../../HOC/Auxillary';
import Visaulization from '../../Components/Burger/Visualization/Visualization';
import AddIngredients from '../../Components/Burger/AddIngredients/AddIngredients';
import Modal from '../../Components/GeneralControls/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary'

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
    showModal: false
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
    if(ind=== -1) return;
    newList.splice(ind,1);
    const newTotal = this.state.totalPrice - PRICING[ingType];
    this.setState({ingredientList: newList, totalPrice:newTotal})
  }
  toggleBuns = (event) =>{
    const bunStatus = event.target.checked
    this.setState({isGlutenFree: bunStatus});
  }
  modalHandler = () => {
    this.setState({showModal: true});
  }
  hideModal = () => {
    this.setState({showModal: false});
    //this.setState({showModal: false, ingredientList:[], totalPrice:4});
  }
  processOrder=()=>{
    this.setState({showModal: false});
  }
  
  render(){ 
    return (
        <Auxillary>
          <Modal show={this.state.showModal} hide={this.hideModal}>
            <OrderSummary ingredients={this.state.ingredientList} price={this.state.totalPrice} isGlutenFree={this.state.isGlutenFree} hide={this.hideModal} process={this.processOrder}/>             
          </Modal>
          <h3 style={{textAlign:'center'}}> Price: ${this.state.totalPrice.toFixed(2)}</h3>   
          <Visaulization ingredientList={this.state.ingredientList} isGlutenFree={this.state.isGlutenFree} />
          <AddIngredients addedIng={this.addedIng}  removedIng={this.removeIng} toggleBuns={this.toggleBuns} ingArr={this.state.ingredientList} showModal={this.modalHandler} />
        </Auxillary>
    )}
}
 
export default Configurator;