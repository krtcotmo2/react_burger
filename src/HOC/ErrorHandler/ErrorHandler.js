import React, {Component} from 'react';
import Modal from '../../Components/GeneralControls/Modal/Modal';
import Aux from '../Auxillary';


const errorHandler = (WrapperComponent, axios) => {
  return class extends Component{
    state={
      err:null
    }
    componentDidMount(){
      axios.interceptors.request.use(req => {
        this.setState({err: null});
        return req;
      });
      axios.interceptors.response.use(res => res, err => {
        this.setState({err: err});
      })
    }

    clearError= () =>{
      this.setState({err: null});
    }

    render(){
      return (
        <Aux>
          <Modal show={this.state.err} hide={this.clearError}>
            {this.state.err ? this.state.err.message : null}
          </Modal>
          <WrapperComponent {...this.props} />
        </Aux>
      );
    }    
  }
}

export default errorHandler;