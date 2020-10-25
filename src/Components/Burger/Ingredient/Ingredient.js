import React from 'react';
import visStyles from './Ingredient.module.css';
import PropTypes from 'prop-types';

const Ingredient = (props) => {
  let ingredient = null;
  switch(props.type){
    case 'bread-bottom':
      ingredient = <div className={visStyles.BreadBottom}></div>;
      break;
    case 'bread-top':
      ingredient = (
        <div className={visStyles.BreadTop}>
          <div className={visStyles.Seeds1}></div>
          <div className={visStyles.Seeds2}></div>
        </div>
      );
      break;
    case 'beef':
      ingredient = <div className={visStyles.Beef}></div>;
      break;
    case 'cheese':
      ingredient = <div className={visStyles.Cheese}></div>;
      break;
    case 'lettuce':
      ingredient = <div className={visStyles.Salad}></div>;
      break;
    case 'bacon':
      ingredient = <div className={visStyles.Bacon}></div>;
      break;
    default:
      ingredient = null;
      break;
  }
  return ( 
    <>
      {ingredient}
    </>
    
   );
}
Ingredient.propTypes = {
  type: PropTypes.string.isRequired
};
export default Ingredient;