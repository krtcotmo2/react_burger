import React from 'react';
import ingStyle from './addIngredients.module.css';

const LineControl = (props) => {
  return ( 
    <div className={ingStyle.ingItem}>
        <h3>{props.itemType}</h3>
        <button className={ingStyle.add} onClick={() => props.addedIng(props.itemType.toLowerCase())}>+</button>
        <button className={ingStyle.remove}>-</button>
      </div>
   );
}
 
export default LineControl;