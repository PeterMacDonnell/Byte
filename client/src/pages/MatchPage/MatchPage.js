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
                    <h5 className="card-title">{"CornerStone"}</h5>
                    <p className="card-text text-center">Rating: {"4/5"}</p>
                    <p className="card-text text-center">Price: {"2/4"}</p>
                    <p className="card-text text-center">Phone: {"(510) 214-8600"}</p>
                    <p className="card-text text-center">Address: {"2367 Shattuck Ave, Berkeley, CA 94704"}</p>
                    <p className="card-text text-center">Reviews: {"Very cool venue for music. Great lighting & acoustics. Perfect size allowing for great interaction between artist and audience. Will definitely be going to more shows here 💯😎"}</p>
                    {/* <form action="" className="btn btn-success" method="post"> <button name="Yes" id={place.place_id} value="1">Yes</button></form>
                    <form action="" className="btn btn-success" method="post"> <button name="No" id={place.place_id}  value="0">No</button></form> */}
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
    )}
}