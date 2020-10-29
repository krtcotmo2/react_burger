import React from 'react';
import toolbarStyle from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Icon from '@material-ui/core/Icon';


const Toolbar = (props) => {
  return (
      <header className={toolbarStyle.toolbar}>        
        <div onClick={props.showSideDrawer}  className={toolbarStyle.mobileOnly}>
          <Icon style={{ color: '#000', marginLeft:'12px' }} fontSize="large">menu</Icon>
        </div>
        <nav className={toolbarStyle.desktopOnly}>
          <NavItems></NavItems>
        </nav>
        <Logo/>
      </header>
    );
}
 
export default Toolbar;