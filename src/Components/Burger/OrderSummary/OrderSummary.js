import React, {Component} from 'react';
import Aux from '../../../HOC/Auxillary';
import ordStyle from './OrderSummay.module.css';
import addingStyle from '../AddIngredients/AddIng.module.css';
import SimpBtn from '../../GeneralControls/Buttons/SimpleButton';


class  OrderSummary  extends Component{ 
  //This could be a funcational component since the shouldcomponent update of the modal prevnts this from unneded updating. 
  componentDidUpdate = () => {
    console.log('updating summay log')
  }
  render(){
    const ingSummary = this.props.ingredients.map( (item, i) => {
      return <li key={item + i} style={{textTransform:'capitalize'}}>{item.type}</li>
    });
    return (  
      <Aux>
        <h2 style={{textAlign:'center'}}>Your order</h2>
        <p>This is the {this.props.isGlutenFree? "gluten free " : null}burger: </p>
        <ul>
          {ingSummary}
        </ul>
        <p><strong>Price:</strong> ${this.props.price.toFixed(2)}</p>
        <div className={ordStyle.row}>
          <SimpBtn className={addingStyle.OrderButton} clicked={this.props.hide}  btnType='cancel'>Cancel</SimpBtn>
          <SimpBtn className={addingStyle.OrderButton} clicked={this.props.process} btnType='continue'>Continue</SimpBtn>
        </div>
      </Aux>
    )
  }

}
 
export default OrderSummary;