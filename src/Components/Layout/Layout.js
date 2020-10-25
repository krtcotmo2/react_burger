import React from 'react';
import Auxillary from '../../HOC/Auxillary'
import layoutStlye from './layout.module.css';
const Layout = (props) => {
  return (  
    <Auxillary>
      <div>
        <span>Nav Bar</span>
        <span>Side Drawer</span>
        <span>Backdrop</span>
      </div>
      <main className={layoutStlye.content} >
        {props.children}
      </main>
    </Auxillary>
  );
}
 
export default Layout;