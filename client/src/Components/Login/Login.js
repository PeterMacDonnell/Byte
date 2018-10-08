import React from "react";
import './login.css';

var login = React.createClass({
  render: function() {
    return (

      <div className="card" style={{width: '30rem'}}>  
        <img className="card-img-top" src="https://via.placeholder.com/350x150" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Log In</h5>
          <p className="card-text">
          </p><form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <button type="login" className="btn btn-success">Log In</button>
            <button type="signup" className="btn btn-warning">Sign Up</button>
          </form>
          <p />
          <p>OR</p>
          <form>
            <div className="form-group">
              <label htmlFor="groupNumber">Group Number</label>
              <input type="number" className="form-control" id="groupNumber" placeholder={12345} />
            </div>
            <button type="login" className="btn btn-success">Join Group</button>
          </form>
        </div>
      </div>
    );
  }
});

export default login;