import React, { Component } from "react";
// import  * from '../../utils';
import Choice from '../../Components/Choice/Choice';
import Navbar from '../../Components/Navbar/Navbar';
import Modal from '../../Components/Modal/Modal';
import Choiceone from '../../Components/Choice/Choiceone';
import queryString from "query-string";


class Home extends Component {
  componentWillMount() {
    var query = queryString.parse(this.props.location.search);
    if (query.token) {
      window.localStorage.setItem("jwt", query.token);
      this.props.history.push("/");
   }
}

  render(){
    return(
      <div>
   <h1 Byte </h1>  
      </div>
    )   
}

export default Home;

