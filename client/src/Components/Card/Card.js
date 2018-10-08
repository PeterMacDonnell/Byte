import React from 'react';

const Card = props =>
    <div className="col-md-6 col-lg-3">
      <div className="card mb-3">
        <img className="card-img-top" src={`img/${props.restaurant.image}.jpg`} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title text-center">Whoa. You got a byte!</h5>
          <h4 className="card-title text-center">{props.restaurant.name}</h4>
          <h4 className="card-title text-center">{props.genere.name}</h4>
          <h4 className="card-title text-center">{props.price.name}</h4>
          <h4 className="card-title text-center">{props.distance.name}</h4>
          <p className="card-text">
            {props.restaurant.description}
          </p>
        </div>  
      </div>
    </div>;