import React, {Component} from 'react';
import modStyle from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../HOC/Auxillary';

class Modal extends Component {
  shouldComponentUpdate =(nextProps, nextState) => {
    //console.log('modal should update', nextProps.show, this.props.show);
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  componentDidUpdate = () => {
    //this only fires if extProps.show !== this.props.show. Proves that the app is no executing more items than needed
    console.log('updating modal')
  }
  render(){
    return ( 
      <Aux>
        <div className={modStyle.Modal} draggable='true' 
        style={
          {transform: this.props.show ? 'translateY(0)' : 'translateY(-50vh)',
          opacity: this.props.show ? '1' : '0',
          }
          }>
          {this.props.children}
        </div>
        <Backdrop show={this.props.show} hide={this.props.hide}/>
      </Aux>
     );
  }
  
}
 
export default Modal;
