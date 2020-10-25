import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const BlueSwitch = withStyles({
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

const GebSwitch = (props) => {
  return ( 
    <FormControlLabel 
    control={<BlueSwitch
      checked={props.checked}
      onChange={props.onChange}
    />} 
    label={props.title} 
    style={{margin:'0 auto'}}/>
   );
}
 
export default GebSwitch;