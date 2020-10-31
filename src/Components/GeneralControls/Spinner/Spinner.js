import React from 'react';
import spinnerStyle from './Spinner.module.css'
const Spinner = (props) => {
  return ( <>
    <h2 style={{textAlign:'center'}}>Processsing Order</h2>
    <div className={spinnerStyle.loader}>Loading ...</div>
    </>
   );
}
 
export default Spinner;