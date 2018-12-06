import React, { Component } from "react";
import {Col, Container, Row} from '../../Components/Grid/index';
import React from "react";
import axios from "axios";
import 'firebase/firestore';
import firebase from 'firebase/app';

export default class roomPage extends React.Component{

    state = {
        matchArray: [],
    }
// *******GET REQUEST SNAPSHOT
componentDidMount(){
    // this.getSnapshotBeforeUpdate();
}

getSnapshot(){

const db = firebase.firestore();
db.collection('rooms').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    //   console.log('ma', matchArray);
    //   this.setState({matchArray: matchArray});
    });
  
  .catch((err) => {
    console.log('Error getting documents', err);

})
  });
}

    render() {
    return(
    <Container>
        <Row>
            <Col size="4"/>
            <Col size="4">
                <div className="card wholecard" style={{width: '18rem', height: '40rem'}}>
                    <img className="card-img-top" style={{width: '18rem', height: '30rem'}} src={"https://lh5.googleusercontent.com/p/AF1QipOrwWBES9B0t2hzBN8HOg8jITdWKVN8G8qweDpm=w203-h135-k-no"} alt="Restaurant" />
                    <div className="card-body">
                    <h5 className="card-title">{"Delage"}</h5>
                    <p className="card-text text-center">Rating: {"4.5/5"}</p>
                    <p className="card-text text-center">Price: {"3/4"}</p>
                    <p className="card-text text-center">Phone: {"(510) 823-2050"}</p>
                    <p className="card-text text-center">Address: {"536 9th St, Oakland, CA 94607"}</p>
                    <p className="card-text text-center">Reviews: {"Buzzy Japanese bistro with upscale omakase-style sushi & drinks in a cozy, minimalist space."}</p>
                    {/* <form action="" className="btn btn-success" method="post"> <button name="Yes" id={place.place_id} value="1">Yes</button></form>
                    <form action="" className="btn btn-success" method="post"> <button name="No" id={place.place_id}  value="0">No</button></form> */}
                    </div>
                </div>
            </Col>
            <Col size="4"/>
        </Row>
    </Container>
    )}
};