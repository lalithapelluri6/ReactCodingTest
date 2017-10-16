import React, { Component } from 'react';
import '../App.css';
import RightComponent from './rightComponent';
import LeftComponent from './leftComponent';
import Loader from './Loader';
import { Grid, Row, Col } from 'react-bootstrap';

var userData = [
  {
    Email: "abc@gmail.com",
    FullName: "abc",
    CompanyName: "xyz"
  }
];

class App extends Component {
  constructor(){
    super();
    this.state = {
      userData: userData
    }
  }

  render() {
    return (
      <Grid fluid>
        <Row className="show-grid">
          <Col md={6}>
            <LeftComponent />
          </Col>
          <Col md={6}>
            <RightComponent data={this.state.userData} />
            <Loader />  
          </Col>                          
        </Row>
      </Grid>
    );
  }
}

export default App;