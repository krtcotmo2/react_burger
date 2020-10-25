import React, {useEffect} from 'react';
import Ingredient from '../Ingredient/Ingredient';
import visStyles from './Visualization.module.css';

const Visualization = (props) => {
  
  useEffect( () => {
    console.log('updated ingredientList')
  },
  [props.ingredientList])
  return ( 
    <div className={visStyles.burger}>
      {props.ingredientList.map( (ing, i) => <Ingredient type={ing.type} key={i}/>)}
    </div>
   );
}
 
export default Visualization;