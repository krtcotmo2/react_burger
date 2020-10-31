import React from 'react';
import LineControl from './LineControl/LineControl';
import addStyles from './AddIng.module.css'
//import { withStyles } from '@material-ui/core/styles';
//import { blueGrey } from '@material-ui/core/colors';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Switch from '@material-ui/core/Switch';
import GenSwitch from '../../GeneralControls/Switch/GenSwitch';

let controlsList = ['Beef','Cheese','Bacon','Lettuce','Bottom Bun'];

// const GlutenFreeSwitch = withStyles({
//   switchBase: {
//     color: blueGrey[500],
//     '&$checked': {
//       color: '#e20074',
//     },
//     '&$checked + $track': {
//       backgroundColor: '#42a5f5',
//     },
//   },
//   checked: {},
//   track: {},
// })(Switch);

const AddIngredients = (props) => {
  // const theSwitch = (<FormControlLabel 
  //   control={<GlutenFreeSwitch 
  //     checked={props.isGlutenFree} 
  //     name="gluttenFree" 
  //     onChange={props.toggleBuns} />} 
  //   label="Glutten Free" 
  //   style={{margin:'0 auto'}}/>);
  
  controlsList = props.avaiableIng;  
  let ingRows = Object.keys(controlsList).map( (item,i) => <LineControl 
    itemType={item} 
    addedIng={() => props.addedIng(item.toLowerCase())} 
    removedIng={() => props.removedIng(item.toLowerCase())} 
    key={item+i}
    disabled={props.ingArr.filter(arg => arg.type === item.toLowerCase()).length === 0}/>)
  if(controlsList.length === 0){
    ingRows = (<h2 style={{textAlign:'center'}}>Unable to load ingredients</h2>);
  }
  return ( 
    <div className={addStyles.controlContainer}>      
      <GenSwitch title="Gluten Free" checked={props.isGlutenFree} onChange={props.toggleBuns}  />
      {ingRows}
      <button className={addStyles.OrderButton} disabled={props.ingArr.length === 0} onClick={props.showModal}>ADD TO ORDER</button>
    </div>      
    /* {theSwitch}//Built in file - GenSwitch is out of file */
   );
}
 
export default AddIngredients;