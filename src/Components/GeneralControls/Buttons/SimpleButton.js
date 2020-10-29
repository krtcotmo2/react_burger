import React from 'react';
import btnStyle from './Buttons.module.css';

const SimpleButton = (props) => {
  return ( 
    <button className={[btnStyle.button, btnStyle[props.btnType]].join(' ')} onClick={props.clicked}>
      {props.children}
    </button>
   );
}
 
export default SimpleButton;