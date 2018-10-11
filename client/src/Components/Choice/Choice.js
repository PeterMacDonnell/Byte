import React from "react";
import axios from "axios";
import{ firebase } from "../../firebase/index";
import './Choice.css';
import {Col, Container, Row} from '../Grid/index';

export default class Choice extends React.Component {
  state = {
    array_of_places: []
  }

  componentDidMount() {
    const food_input = "restaurant"
    const location_input = "berkeley" 
    const api_key = "AIzaSyA7KHhrTUzj_S8Vo1hiPjVMsZKdXKfzpv4"

    axios.get("https://cors-anywhere.herokuapp.com/" + "https://maps.googleapis.com/maps/api/place/textsearch/json?query=+"+food_input+"+in+"+location_input+"&key="+api_key)
      .then(res => {
        console.log(res.data.results);
        const array_of_places = res.data.results;
        this.setState({ array_of_places })
      })
  }
  getData(){
    const more = this.state.array_of_places;
    console.log(more)
  }


  // https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name,rating,formatted_phone_number&key=YOUR_API_KEY

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
              <a href="should be a 1" className="btn btn-success">Yes</a>
              <a href="should be a 0" className="btn btn-danger">No</a>
            </div>
          </div>
        </Col>
       
      ))}
       </Row>
        </Container>
    );
  }
};

// //CARD
// var CardContainer = React.createClass({
// 	render: function(){
// 		var cards = [];
// 		for(var i = 1; i <= this.props.numCards; i += 1){
// 			cards.push(<CardItem idNum={i}  />);
// 		}
// 		return (
// 			<div className="card-flex">{cards}</div>
// 		);
// 	}
// });

// var CardItem = React.createClass({
// 	render: function() {
// 		return(
// 			<div id={'card-' + this.props.idNum} className="card-flex-item"></div>
// 		);
// 	}
// });

// var CardContent = React.createClass({
// 	render: function(){
// 		return(
// 			<div className="card-flex-wrapper">
// 				<div className="card-flex-image">
// 					<img src={this.props.imgSrc} alt="img placeholder" />
// 				</div>
// 				<div className="card-flex-content">
// 					<h3>{this.props.headerText}</h3>
// 					<p>{this.props.description}</p>
// 					<a href={this.props.url} className="card-flex-button btn-block">Button</a>
// 				</div>
// 			</div>
// 		);
// 	}
// });
 /* If can animate, put this on the back
               <a href="topdoghotdogs.com" class="btn btn-primary">Website</a>
          <a href="http://topdoghotdogs.com/themenu.html" class="btn btn-primary">Menu</a>
          <a href="#" class="btn btn-primary">Directions</a>
                     {/* <img className="card-img-top" src={`img/${this.props.restaurant.image}.jpg`} alt="Card image cap" /> */



