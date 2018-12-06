import React, { Component } from "react";
import {Col, Container, Row} from '../../Components/Grid/index';

export default class roomPage extends React.Component{

    componentWillMount(){
        setTimeout(() => { 
            console.log('this ran') 
            this.props.history.push('/foundmatch');
    }, 5000)
    }





    // componentDidMount(){
    //     setTimeout(function(){this.props.history.push('/foundmatch')}, 3000)
    // }

    

    // componentDidMount(){
    //     setTimeout(){function(){ alert("Hello"); }, 3000)
    // }
    // doWork(callback) {
    //     setTimeout(() => callback(this.props.history.push('/foundmatch')), 10); 
    // }
    // this.props.history.push('/room')
    render() {
    return(
    <Container>
        <Row>
            <Col size="4"/>
            <Col size="4" style= {{}}>
                <div className="card wholecard" style={{ width: '18rem', height: '28rem'}}>
                    <img className="card-img-top" style={{width: '18rem', height: '28rem'}} src={"https://i.imgur.com/4KRisDz.png"} alt="Restaurant" />
                    <div className="card-body">
                    <h5 className="card-title">Thanks for using The Byte App! A match will be up shortly.</h5>
                    </div>
                </div>
            </Col>
            <Col size="4"/>
        </Row>
    </Container>
    )}
}