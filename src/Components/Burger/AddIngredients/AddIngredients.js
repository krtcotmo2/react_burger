import React from 'react';
import Auxillary from '../../../HOC/Auxillary'
import LineControl from './LineControl/LineControl';

const controlsList = ['Beef','Cheese','Bacon','Lettuce'];

const AddIngredients = (props) => {
  const controls = controlsList.map( (item,i) => <LineControl itemType={item} addedIng={props.addedIng} key={item+i}/>)
  
  return ( 
    <Auxillary>
      {controls}
    </Auxillary>
   );
}
 
export default AddIngredients;