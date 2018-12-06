import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
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
    name: [],
    number:[],
    redirect: false,
  }
 
  createRoom = () => {
  }
  
  handleChange = e => {
    this.setState({ value: e.target.value });
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/room' />
    }
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
              <div className="card wholecard" style={{ width: '19rem', height: '40rem' }}>
                <img className="card-img-top" style={{ width: '19rem', height: '40rem' }} src={"https://i.imgur.com/4KRisDz.png"} alt="ByteLogo" />
                <div className="card-body">
                  <h5 className="card-title">{"Home Page"}</h5>

                  <form>
                    <FormGroup
                      controlId="homePage" 
                    >
                    <p className="card-text text-center">What is your name?</p>
                      <FormControl
                        type="text"
                        name={this.state.value}
                        placeholder="Enter Your Name"
                        onChange={this.handleChange}
                      />
                      <FormControl.Feedback />
                    </FormGroup>
                  </form>

                  <p className="card-text text-center">What would you like to do?</p>

                   <button href="/room" onClick={() =>  this.props.history.push('/room')} name="Create a Room" id={1} value="" style={{ marginLeft: 'auto', marginRight: 'auto', width: '100%', fontSize: '16px', fontFamily: 'Raleway, sans serif', backgroundColor: '#D0DE4b' }}>Create a Room </button>
                  <p/>
                  <p style={{textAlign: 'center'}}>or</p>
                  <form>
                    <FormGroup controlId="homePage">
                      <FormControl
                        type="text"
                        number={this.state.value}
                        placeholder="Enter Room Code"
                        onChange={this.handleChange}
                      />
                      <FormControl.Feedback />
                    </FormGroup>

                  </form>
                  <button onClick={() => this.props.history.push('/room')} name="Join a Room" id={2} value="" style={{ marginLeft: 'auto', marginRight: 'auto', width: '100%', fontSize: '16px', fontFamily: 'Raleway, sans serif', backgroundColor: '#D0DE4b' }}>Join a Room</button>

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
