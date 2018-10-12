// remember only to call API calls when the component does mount. 
// Execute when the first user joins the roo
const router = require('express').Router();
import axios from "axios";

function api_call_function () {
    const food_input = "restaurants"
    const location_input = "berkeley"
    const api_key = "AIzaSyA7KHhrTUzj_S8Vo1hiPjVMsZKdXKfzpv4"
    axios.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query=+"+food_input+"+in+"+location_input+"+&key="+api_key)
    .then(res => {
      const array_of_places = res.data.results;
      const places_id = array_of_places.map(place => place.place_id);
      this.setState({array_of_places})
      this.api_places_details(places_id);
    })
};
function api_places_details(places_id){
    const api_key = "AIzaSyA7KHhrTUzj_S8Vo1hiPjVMsZKdXKfzpv4";
    // console.log(places_id);
    places_id.forEach(element => {
      axios.get("https://maps.googleapis.com/maps/api/place/details/json?placeid="+element+"&fields=photos,name,rating,formatted_phone_number,review&key="+api_key)
      .then(res => {
        const text_review = res.data.result.reviews;
        text_review.forEach(element=>{
          const places_review = element.text;
          // console.log(places_review)
        })

        // console.log(res.data.result.reviews);
        // put a loopydo in
  
      })
    });
}
