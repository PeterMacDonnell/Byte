import React from 'react';
import axios from 'axios';



export default class roomPage extends React.Component {
  state = {
    array_of_places: []
  }
  api_call_function () {
    const food_input = "restaurants"
    const location_input = "berkeley"
    const api_key = "AIzaSyA7KHhrTUzj_S8Vo1hiPjVMsZKdXKfzpv4"
    axios.get("https://cors-anywhere.herokuapp.com/" + "https://maps.googleapis.com/maps/api/place/textsearch/json?query=+"+food_input+"+in+"+location_input+"+&key="+api_key)
    .then(res => {
      this.api_places_details(res);
      // console.log(res.data.results);
      // const array_of_places = res.data.results;
      // this.setState({ array_of_places })
      // console.log(this.state);
    })
  }
  api_places_details(res){
    const array_of_places = res.data.results;
    this.setState({array_of_places})
    console.log(array_of_places)

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