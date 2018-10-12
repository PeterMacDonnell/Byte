import React, { Component } from "react";
// import  * from '../../utils';
import Choice from '../../Components/Choice/Choice';
import Navbar from '../../Components/Navbar/Navbar';
import Modal from '../../Components/Modal/Modal';
import Choiceone from '../../Components/Choice/Choiceone';


export default class All extends Component {
  render(){
    return(
      <div>
  <Navbar />
<Choiceone />
  <Choice />
      </div>

    )
  }
}



