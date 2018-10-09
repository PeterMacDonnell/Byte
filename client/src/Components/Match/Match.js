import React from "react";
var NewComponent = React.createClass({
      render: function() {
        return (
    
          <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src="http://sffood.net/wp-content/uploads/top-dog-hot-dogs-27-700x452.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Top Dog</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-success">Yes</a>
              <a href="#" className="btn btn-danger">No</a>
           {/* If can animate, put this on the back
               <a href="topdoghotdogs.com" class="btn btn-primary">Website</a>
          <a href="http://topdoghotdogs.com/themenu.html" class="btn btn-primary">Menu</a>
          <a href="#" class="btn btn-primary">Directions</a>  */}
            </div>
          </div>
        );
      }
    });

    

      
      
      
      
      



export default Match;