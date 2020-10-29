import React from 'react';
import navStyle from './NavItem.module.css';

const NavItem = (props) =>  ( 
  <li className={navStyle.NavItem}><a className={props.active ? 'active': null} href={props.link}>{props.children}</a></li>
);

 
export default NavItem;