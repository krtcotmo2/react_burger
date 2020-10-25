import React from 'react';
import ingStyle from './addIngredients.module.css';

const LineControl = (props) => {
  return ( 
    <div className={ingStyle.ingItem}>
        <h3>{props.itemType}</h3>
        <button className={ingStyle.add} onClick={props.addedIng}>+</button>
        <button className={ingStyle.remove} onClick={props.removedIng}>-</button>
      </div>
   );
}
 
export default LineControl;