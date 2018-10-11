import React from 'react';
import axios from 'axios';



export default class roomPage extends React.Component {
  state = {
    array_of_places: [],
    place_id: []
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
      // console.log(res.data.results);
      // console.log(places_id);
      // const array_of_places = res.data.results;
      // this.setState({ array_of_places })
      // console.log(this.state);
    })
  }
  api_places_details(places_id){
    const api_key = "AIzaSyA7KHhrTUzj_S8Vo1hiPjVMsZKdXKfzpv4";
    console.log(places_id);
    places_id.forEach(element => {
      axios.get("https://cors-anywhere.herokuapp.com/"+"https://maps.googleapis.com/maps/api/place/details/json?placeid="+element+"&fields=photos,name,rating,formatted_phone_number,review&key="+api_key)
      .then(res => {
        console.log(res.data);
        // put a loopydo in
  
      })
    });
    // const array_of_places = res.data.results;
    // const places_id = array_of_places.map(place => place.place_id);
    // this.setState({array_of_places})
    // this.setState({places_id})
    // console.log (places_id)
    // console.log(array_of_places)

  }

  componentDidMount() {
    // const food_input = "restaurants"
    // const location_input = "berkeley"
    // const api_key = "AIzaSyA7KHhrTUzj_S8Vo1hiPjVMsZKdXKfzpv4"

    // axios.get("https://cors-anywhere.herokuapp.com/" + "https://maps.googleapis.com/maps/api/place/textsearch/json?query=+"+food_input+"+in+"+location_input+"+&key="+api_key)
    //   .then(res => {
    //     console.log(res.data.results);
    //     const array_of_places = res.data.results;
    //     this.setState({ array_of_places })
    //     console.log(this.state);
    //   })
    this.api_call_function()
  }
  render() {
    // const {places} = this.state;
    return (
      <div>
          <h2>array_of_places</h2>
          <div>
          {this.state.array_of_places.map(place=>(<li>{place.name}</li>))}
          </div>
        </div>
    );
  }
};