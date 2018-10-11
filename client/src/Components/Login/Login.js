import React from "react";
import './Login.css';


export default class Login extends React.Component{
  render () {
    return (
      <div className="card" style={{width: '100rem'}}>
        <div className="card-body">
          <h5 className="card-title">Hiya!</h5>
          <p className="card-text"></p>
          <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-group form-check">
               <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>

          <div>
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
    </div>
    )

    }
  }