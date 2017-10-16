import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ButtonComponent extends Component {
  render() {
    if(this.props.className === 'Register'){ //Register
      return (      
        <Button bsSize={this.props.size}
          bsStyle={this.props.style} block className={'btn-primary'}
          onClick={this.props.registerUser}>
          {this.props.value}
        </Button>
      );
    }
    if(this.props.className === 'login-button') {    
      return (      
        <Button bsSize={this.props.size}
          bsStyle={this.props.style} className={'login-button'}>
          {this.props.value}
        </Button>        
      );
    }if(this.props.className === 'Popup'){
      return ( 
        <button type="button" data-toggle="modal" data-target="#myModal" 
         style={{display:'none'}}
         id="btnPopup"
         className="btn btn-info"
          onClick={() => this.props.ShowAccount()} >
        {this.props.value}
        </button>        
      )
    }
  }
}

export default ButtonComponent;
