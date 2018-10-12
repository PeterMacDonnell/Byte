import React from "react";
import axios from "axios";
// eslint-disable-next-line
import{ firebase } from "../../firebase/index";
import './Choice.css';
import {Col, Container, Row} from '../Grid/index';
import {card} from '../Choice/card';


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
    const food_input = "restaurants"
    const location_input = "berkeley"
    const api_key = "AIzaSyA7KHhrTUzj_S8Vo1hiPjVMsZKdXKfzpv4"
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
    // console.log(places_id);
    places_id.forEach(element => {
      axios.get("https://cors-anywhere.herokuapp.com/"+"https://maps.googleapis.com/maps/api/place/details/json?placeid="+element+"&fields=photo,name,rating,price_level,formatted_address,id,formatted_phone_number,scope,type,opening_hours,website,review&key="+api_key)
      .then(res => {
        const detailed_array = res.data.results;
        this.setState(detailed_array => ({
        detailed_array: [...this.state.detailed_array, res.data.results]
      }))
        const text_review = res.data.result.reviews;
        text_review.forEach(element=>{
          const places_review = element.text;
          this.setState({places_review:element.text});
          // console.log(places_review);
        
        })

        // console.log(res.data.result.reviews);
        // put a loopydo in`
  
      })
    });

  }

  componentDidMount() {
    this.api_call_function()
  }

  getData(){
    const detailed_array = this.state.detailed_array;
    console.log(detailed_array);
  }

  render() {
   
    return (
      <div>
      {this.array_of_places.map(data=>(<li>{data.name}</li>))}
      <Card>
      {this.array_of_places.map(data=>(
        <li>{this,props.name}</li>))}

  </Card>
     </div>
    )     
    };
}

export default Choiceone;
