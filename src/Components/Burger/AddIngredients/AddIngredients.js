import React from 'react';
import LineControl from './LineControl/LineControl';
import addStyles from './AddIng.module.css'
import { withStyles } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import GenSwitch from '../../GeneralControls/GenSwitch';
const controlsList = ['Beef','Cheese','Bacon','Lettuce','Bottom Bun'];

const GlutenFreeSwitch = withStyles({
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
    control={<GlutenFreeSwitch 
      checked={props.isGlutenFree} 
      name="gluttenFree" 
      onChange={props.toggleBuns} />} 
    label="Glutten Free" 
    style={{margin:'0 auto'}}/>);

  const ingRows = controlsList.map( (item,i) => <LineControl 
    itemType={item} 
    addedIng={() => props.addedIng(item.toLowerCase())} 
    removedIng={() => props.removedIng(item.toLowerCase())} 
    key={item+i}
    disabled={props.ingAarr.filter(arg => arg.type === item.toLowerCase()).length === 0}/>)
  
  return ( 
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>      
      <GenSwitch title="Gluten Free" checked={props.isGlutenFree} onChange={props.toggleBuns}  />
      {ingRows}
      <button className={addStyles.OrderButton} disabled={props.ingAarr.length === 0}>ADD TO ORDER</button>
    </div>      
    /* {theSwitch}//Built in file - GenSwitch is out of file */
   );
}
 
export default AddIngredients;