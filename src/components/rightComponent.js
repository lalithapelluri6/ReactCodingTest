import React, { Component } from 'react';
import {connect} from "react-redux";
import {registerUser, ShowAccount} from "../actions/userActions";
import Textbox from './textboxComponent';
import ButtonComponent from './ButtonComponent';
import { Row, Col } from 'react-bootstrap';

class RightComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      Email: "",
      FullName: "",
      CompanyName: "",
      Password: "",
      ConfirmPassword: "",
      data: this.props.data,
      ResponseMessage: "",
      ResponseCode:"",
      FullNameError: ""
    }
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFullNameChange = this.handleFullNameChange.bind(this);
    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
  }

  handleEmailChange(e){
    this.setState({
      Email: e.target.value
    });
  }

  handleFullNameChange(e){
    this.setState({
      FullName: e.target.value
    });
  }

  handleCompanyChange(e){
    this.setState({
      CompanyName: e.target.value
    });
  }

  handlePasswordChange(e){
    this.setState({
      Password: e.target.value
    });
  }

  handleConfirmPasswordChange(e){
    this.setState({
      ConfirmPassword: e.target.value
    });
  }

  render() {
    return (
        <div>
          <Row>
            <Col>&nbsp;</Col>
          </Row>
          <Row>
            <Col md={6}></Col>
            <Col md={3}>
              <p className="mt8x">Already have an account?</p>
            </Col>
            <Col md={3}>
              <a href="">
                <ButtonComponent size="small" className="login-button" value="Login" />
              </a>
            </Col>
          </Row>
          <div>
            <h2>Get Started Today!</h2>
            <h3>Tell us about yourself and join the Vungle family</h3>
            <form noValidate>
              <Textbox 
                  type="text" 
                  placeholder="Email" 
                  val={this.state.Email}  
                  onChangeEvent={this.handleEmailChange.bind(this)} 
              />
              <div className="error" id="emailError" />
              <Textbox 
                  type="text" 
                  placeholder="Full Name" 
                  val={this.state.FullName} 
                  className={this.state.FullNameError}
                  onChangeEvent={this.handleFullNameChange.bind(this)}                   
              />
              <Textbox 
                  type="text" 
                  placeholder="Company Name" 
                  val={this.state.CompanyName} 
                  onChangeEvent={this.handleCompanyChange.bind(this)} 
              />
              <Textbox 
                  type="password" 
                  placeholder="Password" 
                  val={this.state.Password} 
                  onChangeEvent={this.handlePasswordChange.bind(this)} 
              />
              <div className="error" id="passwordError" />
              <Textbox 
                  type="password" 
                  placeholder="Confirm Password" 
                  val={this.state.ConfirmPassword}
                  onChangeEvent={this.handleConfirmPasswordChange.bind(this)} 
              />
              <div className="error" id="passwordConfirmError" />
              <hr />
              <ButtonComponent 
                  type="submit" size="large" 
                  registerUser={() => this.props.Register(this.state)} 
                  className="Register"
                  value="Register" block 
              />
              <ButtonComponent type="button" size="large"                    
                    value = "Show Info"
                    className="Popup"
                    ShowAccount={() => this.props.ShowInfo(this.state)}
                    block 
              />
            </form>

            <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">{this.props.ResponseMessage}</h4>
                            </div>
                            <div className="modal-body">
                                Account with {this.props.Email} {this.props.ResponseCode === 'SUCCESS' ? ' resigtered successfully!': ' already exists!'}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>                    
                </div>            
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      ID: state.ID,
      Email: state.Email,
      FullName: state.FullName,
      CompanyName: state.CompanyName,
      Password: state.Password,
      ResponseMessage: state.ResponseMessage,
      ResponseCode: state.ResponseCode
  }    
}

const mapDispatchToProps = (dispatch) => {
  return {
      Register: (state) => {        
          /*if(state.FullName === ''){
            console.log('state.FullName '+state.FullName);
            state.FullNameError = 'has-error';
          }else{
            console.log('state.FullName '+state.FullName);
            state.FullNameError = 'has-no-error';
          } */    
          dispatch(registerUser(state));
      },
      ShowInfo: (state) => {          
          dispatch(ShowAccount(state));
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightComponent);
