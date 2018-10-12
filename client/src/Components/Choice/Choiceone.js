import React from "react";
import axios from "axios";
import{ firebase } from "../../firebase/index";
import './Choice.css';
import {Col, Container, Row} from '../Grid/index';



export default class Choiceone extends React.Compoent {
  constructor(props) {
    super(props);
    this.state = {
      array_of_places: [],
      place_id: [],
      detailed_array: [],
      places_review: []
    };
  }
  
  api_call_function () {
    const food_input = "restaurants"
    const location_input = "berkeley"
    const api_key = "AIzaSyA7KHhrTUzj_S8Vo1hiPjVMsZKdXKfzpv4"
    axios.get("https://cors-anywhere.herokuapp.com/" + "https://maps.googleapis.com/maps/api/place/textsearch/json?query=+"+food_input+"+in+"+location_input+"+&key="+api_key)
    .then(res => {
      const array_of_places = res.data.results;
      const places_id = array_of_places.map(place => place.place_id);
      this.setState({array_of_places})
      this.api_places_details(places_id);
    })
  }
  api_places_details(places_id){
    const api_key = "AIzaSyA7KHhrTUzj_S8Vo1hiPjVMsZKdXKfzpv4";
    // console.log(places_id);
    places_id.forEach(element => {
      axios.get("https://cors-anywhere.herokuapp.com/"+"https://maps.googleapis.com/maps/api/place/details/json?placeid="+element+"&fields=photo,name,rating,price_level,formatted_address,id,formatted_phone_number,scope,type,opening_hours,website,review&key="+api_key)
      .then(res => {
        const detailed_array = res.data.result;
        this.setState({detailed_array:res.data.result});
        const text_review = res.data.result.reviews;
        text_review.forEach(element=>{
          const places_review = element.text;
          this.setState({places_review:element.text});
          // console.log(places_review);
          console.log(detailed_array);
        })

        // console.log(res.data.result.reviews);
        // put a loopydo in`
  
      })
    });

  }

  componentDidMount() {
    this.api_call_function()
  }
  
  render() {
    // const {places} = this.state;
    return (
      <div>
      {this.state.data_array.map(data=>(<li>{data.name}</li>))}
        </div>
    )     
    };
}

