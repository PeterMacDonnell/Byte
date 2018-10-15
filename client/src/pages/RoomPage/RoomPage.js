import React from "react";
import axios from "axios";
// eslint-disable-next-line
import{ firebase } from "../../firebase/index";
import '../../Components/Choice/Choice';
import {Col, Container, Row} from '../../Components/Grid/index';
// import {Card} from '../Choice/Card';
class RoomPage extends React.Component {

   state = {
      array_of_places: [],
      place_id: [],
      detailedArray: [],
      places_review: []
      // eslint-disable-next-line
    }
  
  
  
  api_call_function () {
    const food_input = "restaurants";
    const location_input = "berkeley";
    const api_key = "AIzaSyA7KHhrTUzj_S8Vo1hiPjVMsZKdXKfzpv4";
    axios.get("https://cors-anywhere.herokuapp.com/" + "https://maps.googleapis.com/maps/api/place/textsearch/json?query=+"+food_input+"+in+"+location_input+"+&key="+api_key)
    .then(res => {
      const array_of_places = res.data.results;
      const places_id = array_of_places.map(place => place.place_id);
      this.setState({array_of_places: array_of_places});
      this.api_places_details(places_id);
    });
  }

  api_places_details(places_id) {
    const api_key = "AIzaSyA7KHhrTUzj_S8Vo1hiPjVMsZKdXKfzpv4";
    const place_holder = []; 
    // console.log(places_id);
    places_id.forEach(element => {
      axios.get("https://cors-anywhere.herokuapp.com/"+"https://maps.googleapis.com/maps/api/place/details/json?placeid="+element+"&fields=photo,name,rating,price_level,formatted_address,id,formatted_phone_number,scope,type,opening_hours,website,review&key="+api_key)
      .then(res => {
        console.log(res)
        place_holder.push(res.data.result)
        this.setState({detailedArray: place_holder});
        })
      })
      
    };

  componentDidMount() {
    this.api_call_function();
  }

  render() {

    console.log('in RoomPage, props:', this.props);

    const api_key = "AIzaSyA7KHhrTUzj_S8Vo1hiPjVMsZKdXKfzpv4";

    return (
      <div>
      <h1> Hello People Of The Internet!</h1>
      {this.state.detailedArray.length ? (
            <div>
                {this.state.detailedArray.map(chicken => (
                  <Container> 
      <Row >
          {this.state.detailedArray.map(place=>(
      <Col size="3">
           <div className="card wholecard" style={{width: '18rem', height: '30rem'}}>
            <img className="card-img-top" style={{width: '18rem', height: '30rem'}} src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=${api_key}`} alt="Restaurant" />
            <div className="card-body">
              <h5 className="card-title">{place.name}</h5>
              <p className="card-text text-center">Rating: {place.rating}/5</p>
              <p className="card-text text-center">Price: {place.price_level}/4</p>
              <p className="card-text text-center">Phone: {place.formatted_phone_number}</p>
              <p className="card-text text-center">Address: {place.formatted_address}</p>
              <form action="" className="btn btn-default yes" method="post"> <button name="Yes" id={place.place_id} value="1">Yes</button></form>
              <form action="" className="btn btn-default no" method="post"> <button name="No" id={place.place_id}  value="0">No</button></form>
  
            </div>
          </div>
        </Col>
      ))}
       </Row>
        </Container>
                    
                    
                    
                  
                ))}
            </div>
              
            ) : (
              <h3>No Results to Display</h3>
            )}
     </div>
    )     
    };
}

export default RoomPage;

// import React from 'react';
// import axios from 'axios';
// import Choiceone from '../../Components/Choice/Choiceone';
// import Navbar from '../../Components/Navbar/Navbar';
// import  firebase  from "../../firebase/index";

// export default class roomPage extends React.Component {
//   state = {
//     array_of_places: [],
//     place_id: []
//   }
  

//   api_call_function () {
//     const food_input = "restaurants"
//     const location_input = "berkeley"
//     const api_key = "AIzaSyA7KHhrTUzj_S8Vo1hiPjVMsZKdXKfzpv4"
//     axios.get("https://cors-anywhere.herokuapp.com/" + "https://maps.googleapis.com/maps/api/place/textsearch/json?query=+"+food_input+"+in+"+location_input+"+&key="+api_key)
//     .then(res => {
//       const array_of_places = res.data.results;
//       const places_id = array_of_places.map(place => place.place_id);
//       this.setState({array_of_places})
//       this.api_places_details(places_id);
//     })
//   }
//   api_places_details(places_id){
//     const api_key = "AIzaSyA7KHhrTUzj_S8Vo1hiPjVMsZKdXKfzpv4";
//     // console.log(places_id);
//     places_id.forEach(element => {
//       axios.get("https://cors-anywhere.herokuapp.com/"+"https://maps.googleapis.com/maps/api/place/details/json?placeid="+element+"&fields=photos,name,rating,formatted_phone_number,review&key="+api_key)
//       .then(res => {
//         const text_review = res.data.result.reviews;
//         text_review.forEach(element=>{
//           const places_review = element.text;
//           // console.log(places_review)
//         })

//         // console.log(res.data.result.reviews);
//         // put a loopydo in
  
//       })
//     });

//   }

//   componentDidMount() {
//     this.api_call_function()
//   }
//   render() {
//     return (
//       <div>
//         <Choiceone />   
//         </div>
//     );
//   }
// };