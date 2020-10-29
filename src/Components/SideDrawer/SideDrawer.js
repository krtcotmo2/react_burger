import React from 'react';

import Logo from '../Logo/Logo';
import NavItems from '../Navigation/NavItems/NavItems';
import sideStyle from './SideDrawer.module.css';
import Backdrop from '../GeneralControls/Backdrop/Backdrop';
import Aux from '../../HOC/Auxillary';

const SideDrawer = (props) => {
  //need function open and close classes
  let attachedClasses = [sideStyle.sideDrawer, sideStyle.close]
  if(props.open){
    attachedClasses =[sideStyle.sideDrawer, sideStyle.open]
  }
  return ( 
    <Aux>
      <Backdrop show={props.open} hide={props.hideSideDrawer}></Backdrop>
      <div className={attachedClasses.join(' ')}>
        <div className={sideStyle.logo}>
          <Logo/>
        </div>
        <nav>
          <NavItems></NavItems>
        </nav>       
      </div>
    </Aux>
    
   );
}
 
export default SideDrawer;