document.querySelector(".card-flip").classList.toggle("flip");

/* 
 * Holder.js for demo image
 * Just for demo purpose
 */
Holder.addTheme('gray', {
  bg: '#777',
  fg: 'rgba(255,255,255,.75)',
  font: 'Helvetica',
  fontweight: 'normal'
});

import React from "react";
import "./MeetTeam.css";

cont MeetTeam = props => (
  <div className="card">
  <div className="img-container">
  <img alt= {props.name} src={props.image} />
  </div>
  <div className="content">
  <ul>
    <li><strong>Name: </strong> {props.name}</li>
    <li><strong>Quote: </strong>{props.quote}</li>
    </ul>
    </div>
  </div>
)

export default MeetTeam;