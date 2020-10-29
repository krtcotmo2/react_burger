import React, {Component} from 'react';
import Auxillary from '../../HOC/Auxillary'
import layoutStlye from './layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';


class Layout extends Component {
  state = {
    sideDrawerOpen: false
  }

  hideSideDrawer = () =>{
    this.setState({sideDrawerOpen: false});
  }
  showSideDrawer = () =>{
    this.setState({sideDrawerOpen: true});
  }

  render(){
    return (  
      <Auxillary>
        <Toolbar showSideDrawer={this.showSideDrawer}/>
        <SideDrawer hideSideDrawer={this.hideSideDrawer} open={this.state.sideDrawerOpen}/>
        <main className={layoutStlye.content} >
          {this.props.children}
        </main>
      </Auxillary>
    );
  }
  
}
 
export default Layout;