import React, { Component } from "react";
// import  * from '../../utils';
import Choice from '../../Components/Choice/Choice';
import Navbar from '../../Components/Navbar/Navbar';
import Modal from '../../Components/Modal/Modal';
import Choiceone from '../../Components/Choice/Choiceone';
import queryString from "query-string";
import * as firebaseui from 'firebaseui';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <title>The Byte App</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </div>

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
      
        handleChange(e) {
          this.setState({ value: e.target.value });
        }
      
        render() {
          return (
            <form>
              <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationState()}
              >
                <ControlLabel>Working example with validation</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Enter your name"
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
              </FormGroup>
            </form>
          );
        }
      }
      
      render(<FormExample />);

      // Logic for createRoom
      // Generate random 4 digit code and save as room id number
      // Automatically join that room
      // Make API call and save info to room id number

      // Logic for joinRoom
      // Enter 4 digit code into form and submit
      // Search through DB for matching 4 digit code
      // Add user to room, show them cards

      <Container>
        <Row>
          <Col size="12">
            <div className="card wholecard" style={{ width: '18rem', height: '30rem' }}>
              <img className="card-img-top" style={{ width: '18rem', height: '30rem' }} src={"#"} alt="ByteLogo" />
              <div className="card-body">
                <h5 className="card-title">{"CornerStone"}</h5>
                <p className="card-text text-center">Welcome to the Byte App!</p>
                <p className="card-text text-center">Create a Room</p>
                <button onClick={() => this.createRoom()} name="Create a Room" id={} value="" style={{ fontSize: '16px', fontFamily: 'Raleway, sans serif', backgroundColor: '#D0DE4b' }}>Create a Room</button>

                <p className="card-text text-center">Join a Room</p>
                <button onClick={() => this.joinRoom()} name="Join a Room" id={} value="" style={{ fontSize: '16px', fontFamily: 'Raleway, sans serif', backgroundColor: '#D0DE4b' }}>Join a Room</button>


              </div>
            </div>
          </Col>
        </Row>
      </Container >





      </div >
    );
  }
};
