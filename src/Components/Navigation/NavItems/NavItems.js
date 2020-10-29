import React from 'react';
import NavItem from './NavItem'
import navStyle from './NavItems.module.css';

const NavItems = (props) => {
  return ( 
    <ul className={navStyle.NavItems}>
      <NavItem link="/" active>Builder</NavItem>
      <NavItem link="http://google.com">Checkout</NavItem>
    </ul>
   );
}
 
export default NavItems;