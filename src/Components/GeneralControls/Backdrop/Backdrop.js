import React from 'react';
import backStyle from './Backdrop.module.css';

const BackDrop = (props) => (
  props.show ? <div className={backStyle.backdrop} onClick={props.hide}></div>:null
)
 
export default BackDrop;