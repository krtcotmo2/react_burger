import React, {useEffect} from 'react';
import Ingredient from '../Ingredient/Ingredient';
import visStyles from './Visualization.module.css';

const Visualization = (props) => {
  
  useEffect( () => {
    console.log('updated ingredientList')
  },
  [props.ingredientList]);

  const topBun = props.isGluttenFree ? null : <Ingredient type='bread-top' key='Topbun0'/>;
  const burgerStack = props.ingredientList.map( (ing, i) => {
    return (<Ingredient type={ing.type} key={ing.type+i+1}/>)
  });
  const bottomBun = props.isGluttenFree ? null : <Ingredient type='bread-bottom' key='Bottombun0'/>;
  
  return ( 
    <div className={visStyles.burger}>     
      {topBun}
      {burgerStack}
      {bottomBun}
    </div>
   );
}
 
export default Visualization;