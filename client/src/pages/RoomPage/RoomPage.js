import React from 'react';
import axios from 'axios';

export default class roomPage extends React.Component {
  state = {
    array_of_places: []
  }

  componentDidMount() {
    const food_input = "restaurants"
    const location_input = "berkeley"
    const api_key = "AIzaSyA7KHhrTUzj_S8Vo1hiPjVMsZKdXKfzpv4"

    axios.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query=+"+food_input+"+in+"+location_input+"+&key="+api_key)
      .then(res => {
        const array_of_places = res.data;
        this.setState({ array_of_places });
      })
  }
  render() {
    return (
        <p>array_of_places{this.state.array_of_places.map(place=><li>{place.name}</li>)}</p>
    )
  }
}