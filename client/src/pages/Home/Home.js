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
        <title>Byte</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <h1>Whassup mah d00dz.</h1>
      </div>
    );
  }
};
