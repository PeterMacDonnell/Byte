import React from "react";
import axios from "axios";
import{ firebase } from "../../firebase/index";
import './Choice.css';

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
  getData() {
    const more = this.state.array_of_places;
    console.log(more)
  }


  // https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name,rating,formatted_phone_number&key=YOUR_API_KEY

  render() {
    const api_key = "AIzaSyA7KHhrTUzj_S8Vo1hiPjVMsZKdXKfzpv4";
    return (
      <div>
          <h2>array_of_places</h2>
          <div>
          {this.state.array_of_places.map(place=>(

           <div className="card" style={{width: '18rem'}}>
            {/* <img className="card-img-top" src={`img/${this.props.restaurant.image}.jpg`} alt="Card image cap" /> */}
            
            <img className="card-img-top" src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=${api_key}`} alt="Restaurant" />
            <div className="card-body">
              <h5 className="card-title">{place.name}</h5>
              <p className="card-text text-center">Rating: {place.rating}</p>
              <p className="card-text text-center">Price Level: {place.price_level}</p>
              {/* <p className="card-text">Some quick exam  ple text to build on the card title and make up the bulk of the card's content.</p> */}
              <a href="should be a 1" className="btn btn-success">Yes</a>
              <a href="should be a 0" className="btn btn-danger">No</a>
           {/* If can animate, put this on the back
               <a href="topdoghotdogs.com" class="btn btn-primary">Website</a>
          <a href="http://topdoghotdogs.com/themenu.html" class="btn btn-primary">Menu</a>
          <a href="#" class="btn btn-primary">Directions</a>  */}
            </div>
          </div>
        ))}
          </div>
        </div>
    );
  }
};
// class Choice extends React.Component {
//       render() {
//         return (
//               // const {restaurant} = this.props
    
//           <div className="card" style={{width: '18rem'}}>
//             {/* <img className="card-img-top" src={`img/${this.props.restaurant.image}.jpg`} alt="Card image cap" /> */}
//             <img className="card-img-top" src='http://sffood.net/wp-content/uploads/top-dog-hot-dogs-27-700x452.jpg' alt="Restaurant" />
//             <div className="card-body">
//               {/* <h5 className="card-title">{this.props.restaurant.name}Top Dog</h5> */}
//               <h5 className="card-title">Top Dog</h5>
//               {/* <p className="card-text">{this.props.genre.name}Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
//               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//               <a href="should be a 1" className="btn btn-success">Yes</a>
//               <a href="should be a 0" className="btn btn-danger">No</a>
//            {/* If can animate, put this on the back
//                <a href="topdoghotdogs.com" class="btn btn-primary">Website</a>
//           <a href="http://topdoghotdogs.com/themenu.html" class="btn btn-primary">Menu</a>
//           <a href="#" class="btn btn-primary">Directions</a>  */}
//             </div>
//           </div>
//         );
//       }
//     };  





