import React from "react";
import axios from "axios";
// eslint-disable-next-line
import{ firebase } from "../../firebase/index";
import './Choice.css';
// eslint-disable-next-line
import {Col, Container, Row} from '../Grid/index';
var keys = require("../../../../keys")

export default class Choice extends React.Component {
  state = {
    array_of_places: []
  }

  componentDidMount() {
    const food_input = "restaurant"
    const location_input = "berkeley" 
    //Peter tried hiding this key
    const api_key = keys.api_key.key
// eslint-disable-next-line
    axios.get("https://cors-anywhere.herokuapp.com/" + "https://maps.googleapis.com/maps/api/place/textsearch/json?query=+"+food_input+"+in+"+location_input+"&key="+api_key)
      .then(res => {
        console.log(res.data.results);
        const array_of_places = res.data.results;
        this.setState({ array_of_places })
      })
  }
  // eslint-disable-next-line
  getData(){
    const more = this.state.array_of_places;
    console.log(more)
  }

  render() {
    const api_key = "AIzaSyA7KHhrTUzj_S8Vo1hiPjVMsZKdXKfzpv4";
    return (
      <Container> 
      <Row >
          {this.state.array_of_places.map(place=>(
      <Col size="3">
           <div className="card wholecard" style={{width: '18rem', height: '30rem'}}>
            <img className="card-img-top" style={{width: '18rem', height: '30rem'}} src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=${api_key}`} alt="Restaurant" />
            <div className="card-body">
              <h5 className="card-title">{place.name}</h5>
              <p className="card-text text-center">Rating: {place.rating}</p>
              <p className="card-text text-center">Price Level: {place.price_level}</p>

              <form action="" className="btn btn-success" method="post"> <button name="Yes" id={place.place_id} value="1">Yes</button></form>
              <form action="" className="btn btn-success" method="post"> <button name="No" id={place.place_id}  value="0">No</button></form>
            </div>
          </div>
        </Col>
      ))}
       </Row>
        </Container>
    )
  }
}

 

