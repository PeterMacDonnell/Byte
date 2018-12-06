import React, { Component } from "react";
// import  * from '../../utils';
import Choice from '../../Components/Choice/Choice';
import Navbar from '../../Components/Navbar/Navbar';
import Modal from '../../Components/Modal/Modal';
import Choiceone from '../../Components/Choice/Choiceone';
import queryString from "query-string";
import * as firebaseui from 'firebaseui';
import { Col, Container, Row } from '../../Components/Grid/index';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class Home extends React.Component {

  state = {
    value: [],

  }
  // Logic for enterName
  // Enter your name
  // enter name into db and create user id

  // class FormExample extends React.Component {
  //   constructor(props, context) {
  //     super(props, context);

  //     this.handleChange = this.handleChange.bind(this);

  //     this.state = {
  //       value: ''
  //     };
  //   }


  // getValidationState() {
  //   const codeLength = this.state.value.length;
  //   if (codeLength = 4) return 'success';
  //   else if (codeLength > 4) return 'error';
  //   return null;
  // }

  // Logic for createRoom
  createRoom() {

  }
  // Generate random 4 digit code and save as room id number
  // Automatically join that room
  // Make API call and save info to room id number

  // Logic for joinRoom
  // Enter 4 digit code into form and submit
  // Search through DB for matching 4 digit code
  // Add user to room, show them cards

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div>
        <div>
          <title>The Byte App</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </div>

        <Container>
          <Row>
          <Col size="4"/>
            <Col size="4">
              <div className="card wholecard" style={{ width: '19rem', height: '38rem' }}>
                <img className="card-img-top" style={{ width: '19rem', height: '38rem' }} src={"https://i.imgur.com/4KRisDz.png"} alt="ByteLogo" />
                <div className="card-body">
                  <h5 className="card-title">{"Home Page"}</h5>

                  <form>
                    <FormGroup
                      controlId="homePage"
                    
                    >
                      <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Enter your name"
                        onChange={this.handleChange}
                      />
                      <FormControl.Feedback />
                    </FormGroup>
                  </form>

                  <p className="card-text text-center">What would you like to do?</p>

                  <button onClick={() => this.createRoom()} name="Create a Room" id={1} value="" style={{ fontSize: '16px', fontFamily: 'Raleway, sans serif', backgroundColor: '#D0DE4b' }}>Create a Room</button>
                  <p/>
                  <p>or</p>
                  <form>
                    <FormGroup
                      controlId="homePage"
                    
                    >
                      <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Enter Room Code"
                        onChange={this.handleChange}
                        // validationState={this.getValidationState()}
                      />
                      <FormControl.Feedback />
                    </FormGroup>

                  </form>
                  <button onClick={() => this.joinRoom()} type= "submit" name="Join a Room" id={2} value="" style={{ fontSize: '16px', fontFamily: 'Raleway, sans serif', backgroundColor: '#D0DE4b' }}>Join a Room</button>

                </div>
              </div>
            </Col>
            <Col size="4"/>
          </Row>
        </Container >
      </div>
    );
  }

};
