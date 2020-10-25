import React, {useEffect} from 'react';
import Ingredient from '../Ingredient/Ingredient';
import visStyles from './Visualization.module.css';

const Visualization = (props) => {
  
  useEffect( () => {
    //console.log('updated ingredientList')
  },
  [props.ingredientList]);

  const topBun = props.isGlutenFree ? null : <Ingredient type='bread-top' key='Topbun0'/>;
  const burgerStack = props.ingredientList.length === 0 ? 
    <p className={visStyles.emptyBurger}>Start building your {!props.isGlutenFree ? `burger` : `"burger"`}</p> : 
    props.ingredientList.map( (ing, i) => {
      return (<Ingredient type={ing.type} key={ing.type+i+1}/>)
    });
  const bottomBun = props.isGlutenFree ? null : <Ingredient type='bottom bun' key='Bottombun0'/>;
  
  return ( 
    <div className={visStyles.burger}>  
      {topBun}
      {burgerStack}
      {bottomBun}
    </div>
   );
}
 
export default Visualization;