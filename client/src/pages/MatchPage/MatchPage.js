import React, { Component } from "react";
import {Col, Container, Row} from '../../Components/Grid/index';

export default class roomPage extends React.Component{
    render() {
    return(
    <Container>
        <Row>
            <Col size="4"/>
            <Col size="4" style= {{}}>
                <div className="card wholecard" style={{ width: '18rem', height: '25rem'}}>
                    <img className="card-img-top" style={{width: '18rem', height: '25rem'}} src={"https://i.imgur.com/4KRisDz.png"} alt="Restaurant" />
                    <div className="card-body">
                    <h5 className="card-title">Thanks for using The Byte App! A match will be up shortly.</h5>

                    {/* <form action="" className="btn btn-success" method="post"> <button name="Yes" id={place.place_id} value="1">Yes</button></form>
                    <form action="" className="btn btn-success" method="post"> <button name="No" id={place.place_id}  value="0">No</button></form> */}
                    </div>
                </div>
            </Col>
            {/* <Col size="4"/> */}
        </Row>
    </Container>
    )}
}