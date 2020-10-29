import React from 'react';
import logo from '../../assets/images/burger-logo.png';
import logoStyle from './Logo.module.css';

const Logo = (props) => {
  return ( 
    <div className={logoStyle.logo}>
        <img src={logo} alt='BurgerBrand Logo'/>
    </div>
   );
}
 
export default Logo;