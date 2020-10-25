import React from 'react';
import Ingredient from '../Ingredient/Ingredient';
import visStyles from './Visualization.module.css';

const Visualization = (props) => {
  
  return ( 
    <div className={visStyles.burger}>
      {props.ingredientList.map( (ing, i) => {
        return(<Ingredient type={ing.type} key={i}/>)
      })}
      {/* <Ingredient type='bread-top'/>
      <Ingredient type='cheese'/>   
      <Ingredient type='meat'/>   
      <Ingredient type='bread-bottom'/> */}
    </div>
   );
}
 
export default Visualization;