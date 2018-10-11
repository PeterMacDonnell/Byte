import React from 'react';
import './Match';


class Match extends React.Component {
  render () {
    // const {restaurant} = this.props.whatever;
    return  (
// const Match = props =>
    <div className="col-md-6 col-lg-3">
      <div className="card mb-3">
        {/* <img className="card-img-top" src={`img/${props.restaurant.image}.jpg`} alt="Card image cap"/> */}
        <img className="card-img-top" src={`http://sffood.net/wp-content/uploads/top-dog-hot-dogs-27-700x452.jpg`} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title text-center">Whoa. You got a byte!</h5>
          {/* <h4 className="card-title text-center">{props.restaurant.name}</h4> */}
          <h4 className="card-title text-center">Hot Doggo</h4>
          {/* <h4 className="card-title text-center">{props.genre.name}</h4> */}
          <h4 className="card-title text-center">American</h4>
          {/* <h4 className="card-title text-center">{props.price.name}</h4> */}
          <h4 className="card-title text-center">$$$</h4>
          {/* <h4 className="card-title text-center">{props.distance.name}</h4> */}
          <h4 className="card-title text-center">one mile</h4>
          {/* /* <p className="card-text"> {props.restaurant.description}</p> */}
          <p className="card-text"> A place that serves up hella hot dogs</p>
        </div>  
      </div>
    </div>
    )
  };
}


    export default Match;