import React, { Component } from 'react';
import { FormControl, FormGroup } from 'react-bootstrap';

class Textbox extends Component {
  render() {
    console.log('text box rendered..', this.props.val);
    /*if(this.props.val != ''){
      return (
        <FormGroup>
          <FormControl
            bsSize="lg"
            type={this.props.type}
            value={this.props.val}
            placeholder={this.props.placeholder}
            onChange={this.props.onChangeEvent}          
          />
        </FormGroup>
      )
    } else {*/
      return (
        <FormGroup className={this.props.className}>
          <FormControl
            bsSize="lg"
            type={this.props.type}
            value={this.props.val}
            placeholder={this.props.placeholder}
            onChange={this.props.onChangeEvent}          
          />
        </FormGroup>
      )    
  }
}

export default Textbox;
