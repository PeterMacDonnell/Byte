import React, { Component } from "react";
import {Col, Container, Row} from '../../Components/Grid/index';

export default class roomPage extends React.Component{
    render() {
    return(
    <Container>
        <Row>
            <Col size="12">
                <div className="card wholecard" style={{width: '18rem', height: '30rem'}}>
                    <img className="card-img-top" style={{width: '18rem', height: '30rem'}} src={"https://www.cornerstoneberkeley.com/files/2017/05/Cornerstone-Berkeley15.jpg"} alt="Restaurant" />
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
        </Row>
    </Container>
    )}
}