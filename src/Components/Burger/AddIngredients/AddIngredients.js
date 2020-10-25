import React from 'react';
import LineControl from './LineControl/LineControl';
import { withStyles } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
const controlsList = ['Beef','Cheese','Bacon','Lettuce'];

const PurpleSwitch = withStyles({
  switchBase: {
    color: blueGrey[500],
    '&$checked': {
      color: '#42a5f5',
    },
    '&$checked + $track': {
      backgroundColor: '#42a5f5',
    },
  },
  checked: {},
  track: {},
})(Switch);

const AddIngredients = (props) => {
  const theSwitch = (<FormControlLabel 
    control={<PurpleSwitch 
      checked={props.isGluttenFree} 
      name="gluttenFree" 
      onChange={props.toggleBuns} />} 
    label="Glutten Free" 
    style={{margin:'0 auto'}}/>);

  const controls = controlsList.map( (item,i) => <LineControl 
    itemType={item} 
    addedIng={() => props.addedIng(item.toLowerCase())} 
    removedIng={() => props.removedIng(item.toLowerCase())} 
    key={item+i}/>)
  
  return ( 
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
      {theSwitch}
      {controls}
    </div>
   );
}
 
export default AddIngredients;