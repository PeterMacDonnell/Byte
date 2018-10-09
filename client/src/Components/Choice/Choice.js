import React from "react";
import './match.css';

class Choice extends React.Component {
      render() {
        return (
              const {restaurant} = this.props
    
          <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={`img/${this.props.restaurant.image}.jpg`} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{this.props.restaurant.name}Top Dog</h5>
              <p className="card-text">{this.props.genre.name}Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="should be a 1" className="btn btn-success">Yes</a>
              <a href="should be a 0" className="btn btn-danger">No</a>
           {/* If can animate, put this on the back
               <a href="topdoghotdogs.com" class="btn btn-primary">Website</a>
          <a href="http://topdoghotdogs.com/themenu.html" class="btn btn-primary">Menu</a>
          <a href="#" class="btn btn-primary">Directions</a>  */}
            </div>
          </div>
        );
      }
    };  



export default Match;