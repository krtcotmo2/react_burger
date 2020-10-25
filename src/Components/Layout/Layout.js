import React from 'react';
import Auxillary from '../../HOC/Auxillary'
import layoutStlye from './layout.module.css';
const Layout = (props) => {
  return (  
    <Auxillary>
      <div>
        <p>Nav Bar</p>
        <p>Side Drawer</p>
        <p>Backdrop</p>
      </div>
      <main className={layoutStlye.content} >
        {props.children}
      </main>
    </Auxillary>
  );
}
 
export default Layout;