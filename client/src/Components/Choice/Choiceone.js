import React from "react";
import axios from "axios";
// eslint-disable-next-line
import{ firebase } from "../../firebase/index";
import './Choice.css';
import {Col, Container, Row} from '../Grid/index';
// import {Card} from '../Choice/Card';


class Choiceone extends React.Component {
 constructor(props){
   super(props)
 
   this.state = {
      array_of_places: [],
      place_id: [],
      detailed_array: [],
      places_review: []
      // eslint-disable-next-line
    }
  }
  
  
  api_call_function () {
    const food_input = "restaurants";
    const location_input = "berkeley";
    const api_key = "AIzaSyA7KHhrTUzj_S8Vo1hiPjVMsZKdXKfzpv4";
    axios.get("https://cors-anywhere.herokuapp.com/" + "https://maps.googleapis.com/maps/api/place/textsearch/json?query=+"+food_input+"+in+"+location_input+"+&key="+api_key)
    .then(res => {
      const array_of_places = res.data.results;
      const places_id = array_of_places.map(place => place.place_id);
      this.setState({array_of_places});
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
      
        // const text_review = res.data.result.reviews;
        // text_review.forEach(element=>{
        //   const places_review = element.text;
        //   this.setState({places_review:element.text});
        //   // console.log(places_review);

        // })
        
        })

        // console.log(res.data.result.reviews);
        // put a loopydo in
  
      })
      this.setState({detailed_array: place_holder});
    };

  

  componentDidMount() {
    this.api_call_function();
  }

  // getData(){
  //   const detailed_array = this.state.detailed_array;
  //   console.log(detailed_array);
  // }

  render() {
   
    return (
      <div>
      <ul>
      
      {this.state.detailed_array.map(data => {
        return <li>{data.name}</li>
        }
      )}
      </ul>
     </div>
    )     
    };
}

export default Choiceone;
