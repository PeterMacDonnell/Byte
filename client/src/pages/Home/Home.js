import React, { Component } from "react";
// import  * from '../../utils';
// import Choice from '../../Components/Choice/Choice';
import Navbar from '../../Components/Navbar/Navbar';
import Modal from '../../Components/Modal/Modal';
import Choiceone from '../../Components/Choice/Choiceone';
import queryString from "query-string";
import * as firebaseui from 'firebaseui'
import './css/bootstrap.min.css';
import './css/open-iconic-bootstrap.min.css';
import './css/animate.css';
// import './css/owl.carousel.min.css';
// import './css/owl.theme.default.min.css';
import './css/magnific-popup.css';
import './css/bootstrap-datepicker.css';
import './css/bootstrap.min.css';
import './css/jquery.timepicker.css';
import './css/icomoon.css';
import './css/style.css';

  


class Home extends Component {
  

  render(){
    return(
      <div>
     
     <div>
  <nav className="navbar navbar-expand-lg navbar-dark site_navbar bg-dark site-navbar-light" id="site-navbar">
    <div className="container">
      <a className="navbar-brand" href="index.html">Byte</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#site-nav" aria-controls="site-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="oi oi-menu" /> Menu
      </button>
      <div className="collapse navbar-collapse" id="site-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active"><a href="#section-home" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#section-about" className="nav-link">About</a></li>
          <li className="nav-item"><a href="#section-offer" className="nav-link">Login</a></li>
          {/* <li class="nav-item"><a href="#section-menu" class="nav-link">Menu</a></li> */}
          {/* <li class="nav-item"><a href="#section-news" class="nav-link">News</a></li> */}
          {/* <li class="nav-item"><a href="#section-gallery" class="nav-link">Gallery</a></li> */}
          <li className="nav-item"><a href="#section-contact" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
  {/* END nav */}
  <section className="site-cover" style={{backgroundImage: 'url(images/bg_3.jpg)'}} id="section-home">
    <div className="container">
      <div className="row align-items-center justify-content-center text-center site-vh-100">
        <div className="col-md-12">
          <h1 className="site-heading site-animate mb-3">Welcome To Byte</h1>
          <h2 className="h5 site-subheading mb-5 site-animate">Always know what to eat with others.</h2>    
          <p><a href="https://colorlib.com/" target="_blank" className="btn btn-outline-white btn-lg site-animate" data-toggle="modal" data-target="#reservationModal">Login</a></p>
        </div>
      </div>
    </div>
  </section>
  {/* END section */}
  <section className="site-section" id="section-about">
    <div className="container">
      <div className="row">
        <div className="col-md-5 site-animate mb-5">
          <h4 className="site-sub-title">Our Story</h4>
          <h2 className="site-primary-title display-4">Welcome</h2>
          <p>We're a fun bunch of developers that wanted to build an aweosome app.</p>
          <p className="mb-4" />
          <p><a href="#" className="btn btn-secondary btn-lg">Learn More About Us</a></p>
        </div>
        <div className="col-md-1" />
        <div className="col-md-6 site-animate img" data-animate-effect="fadeInRight">
          <img src="images/about_img_1.jpg" alt="Free Template by colorlib.com" className="img-fluid" />
        </div>
      </div>
    </div>
  </section>
  {/* END section */}
  <section className="site-section bg-light" id="section-offer">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center mb-5 site-animate">
          <h4 className="site-sub-title">Sample</h4>
          <h2 className="display-4">Our Offer This Summer</h2>
          <div className="row justify-content-center">
            <div className="col-md-7">
              <p className="lead">Here are Some Samples</p>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="owl-carousel site-owl">
            <div className="item">
              <div className="media d-block mb-4 text-center site-media site-animate border-0">
                <img src="images/offer_1.jpg" alt="Free Template by colorlib.com" className="img-fluid" />
                <div className="media-body p-md-5 p-4">
                  {/* <h5 class="text-primary">$19.50</h5> */}
                  <h5 className="mt-0 h4">Delicious Eats</h5>
                  <p className="mb-4">In your neighborhood</p>
                  <p className="mb-0"><a href="/" className="btn btn-primary btn-sm">Sign Up Now</a></p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="media d-block mb-4 text-center site-media site-animate border-0">
                <img src="images/offer_2.jpg" alt="Free Template by colorlib.com" className="img-fluid" />
                <div className="media-body p-md-5 p-4">
                  {/* <h5 class="text-primary">$29.50</h5> */}
                  <h5 className="mt-0 h4">In</h5>
                  <p className="mb-4">In your neighborhood</p>
                  <p className="mb-0"><a href="/" className="btn btn-primary btn-sm">Sign up Now!</a></p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="media d-block mb-4 text-center site-media site-animate border-0">
                <img src="images/offer_3.jpg" alt="Free Template by colorlib.com" className="img-fluid" />
                <div className="media-body p-md-5 p-4">
                  {/* <h5 class="text-primary">$11.50</h5> */}
                  <h5 className="mt-0 h4">Your Neighborhood</h5>
                  <p className="mb-4">Right Now</p>
                  <p className="mb-0"><a href="/" className="btn btn-primary btn-sm">Sign Up Now!</a></p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="media d-block mb-4 text-center site-media site-animate border-0">
                <img src="images/offer_1.jpg" alt="Free Template by colorlib.com" className="img-fluid" />
                <div className="media-body p-md-5 p-4">
                  <h5 className="text-primary">$33.50</h5>
                  <h5 className="mt-0 h4">Beef with Sauce</h5>
                  <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <p className="mb-0"><a href="/" className="btn btn-primary btn-sm">Order Now!</a></p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="media d-block mb-4 text-center site-media site-animate border-0">
                <img src="images/offer_2.jpg" alt="Free Template by colorlib.com" className="img-fluid" />
                <div className="media-body p-md-5 p-4">
                  <h5 className="text-primary">$12.50</h5>
                  <h5 className="mt-0 h4">Fresh Salmon Fish</h5>
                  <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <p className="mb-0"><a href="/" className="btn btn-primary btn-sm">Order Now!</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* END section */}
  <section className="site-section bg-light" id="section-contact">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center mb-5 site-animate">
          <h2 className="display-4">Get In Touch</h2>
          <div className="row justify-content-center">
            <div className="col-md-7">
              <p className="lead">Get a hold of us</p>
            </div>
          </div>
        </div>
        <div className="col-md-7 mb-5 site-animate">
          <form action method="post">
            <div className="form-group">
              <label htmlFor="name" className="sr-only">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="text" className="form-control" id="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea name="message" id="message" cols={30} rows={10} className="form-control" placeholder="Write your message" defaultValue={""} />
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-primary btn-lg" defaultValue="Send Message" />
            </div>
          </form>
        </div>
        <div className="col-md-1" />
        <div className="col-md-4 site-animate">
          <p><img src="images/about_img_1.jpg" alt className="img-fluid" /></p>
          <p className="text-black">
            Address: <br /> 1995 University Ave <br /> Berkeley, CA <br /> <br />
            Phone: <br /> 510-445-1234 <br /> <br />
            Email: <br /> <a href="mailto:info@yoursite.com">info@ythebyteapp.com</a>
          </p>
        </div>
      </div>
    </div>
  </section>
  <div id="map" />
  {/* END section */}
  <footer className="site-footer site-bg-dark site-section">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 site-animate">
              <h2 className="site-heading-2">About Us</h2>
              <p>A fun loving team making food fun</p>
            </div>
            <div className="col-md-1" />
            <div className="col-md-3 site-animate">
              <div className="site-footer-widget mb-4">
                <h2 className="site-heading-2">The Team</h2>
                <ul className="list-unstyled">
                  <li><a href="/" className="py-2 d-block">About US</a></li>
                  <li><a href="/" className="py-2 d-block">Chefs</a></li>
                  <li><a href="/" className="py-2 d-block">Events</a></li>
                  <li><a href="/" className="py-2 d-block">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 site-animate">
              <div className="site-footer-widget mb-4">
                <h2 className="site-heading-2">The Team</h2>
                <ul className="list-unstyled">
                  <li><a href="/" className="py-2 d-block">Alex</a></li>
                  <li><a href="/" className="py-2 d-block">Brogan</a></li>
                  <li><a href="/" className="py-2 d-block">Crystal</a></li>
                  <li><a href="/" className="py-2 d-block">Grace</a></li>
                  <li><a href="/" className="py-2 d-block">Peter</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 site-animate">
              <div className="site-footer-widget mb-4">
                <h2 className="site-heading-2">The Team</h2>
                <ul className="list-unstyled">
                  <li><a href="/" className="py-2 d-block">Alex</a></li>
                  <li><a href="/" className="py-2 d-block">Brogan</a></li>
                  <li><a href="/" className="py-2 d-block">Crystal</a></li>
                  <li><a href="/" className="py-2 d-block">Grace</a></li>
                  <li><a href="/" className="py-2 d-block">Peter</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row site-animate">
        <div className="col-md-12 text-center">
          <div className="site-footer-widget mb-4">
            <ul className="site-footer-social list-unstyled ">
              <li className="site-animate"><a href="/"><span className="icon-twitter" /></a></li>
              <li className="site-animate"><a href="/"><span className="icon-facebook" /></a></li>
              <li className="site-animate"><a href="/"><span className="icon-instagram" /></a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-12 text-center">
        </div>
      </div>
    </div>
  </footer>
  {/* Modal */}
  <div className="modal fade" id="reservationModal" tabIndex={-1} role="dialog" aria-labelledby="reservationModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <div className="row">
            <div className="col-lg-12">
              <div className="bg-image" style={{backgroundImage: 'url(images/reservation_1.jpg)'}} />
            </div>
            <div className="col-lg-12 p-5">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <small>CLOSE </small><span aria-hidden="true">×</span>
              </button>
              <h1 className="mb-4">The Byte App</h1> 
              <h3 className="mb-4">Sign In </h3> 
              <form action="/" method="post">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label htmlFor="m_fname">Username</label>
                    <input type="text" className="form-control" id="m_fname" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="m_lname">Password</label>
                    <input type="text" className="form-control" id="m_lname" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <input type="submit" className="btn btn-primary btn-lg btn-block" defaultValue="Sign In" />
                  </div>
                </div>
                <h3 className="mb-4">Sign Up</h3> 
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label htmlFor="m_fname">Username</label>
                    <input type="text" className="form-control" id="m_fname" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="m_lname">Password</label>
                    <input type="text" className="form-control" id="m_lname" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <input type="submit" className="btn btn-primary btn-lg btn-block" defaultValue="Sign Up" />
                  </div>
                </div>
                <h4 className="mb-4">Create a Room</h4> 
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label htmlFor="m_people">How Many People</label>
                    <select name id="m_people" className="form-control">
                      <option value={1}>2 People</option>
                      <option value={2}>3 People</option>
                      <option value={3}>4 People</option>
                      <option value="4+">5+ People</option>
                    </select>
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="m_people">Type of Meal</label>
                    <select name id="m_people" className="form-control">
                      <option value={1}>Breakfast</option>
                      <option value={2}>Brunch</option>
                      <option value={3}>Lunch</option>
                      <option value={4}>Dinner</option>
                      <option value={5}>Drinks</option>
                      <option value={6}>Dessert</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <input type="submit" className="btn btn-primary btn-lg btn-block" defaultValue="Create Room" />
                  </div>
                </div>
                <h3 className="mb-4">Enter a Code</h3> 
                <div className="row">
                  <div className="col-md-12 form-group">
                    <label htmlFor="m_fname">Enter Code Here</label>
                    <input type="text" className="form-control" id="m_fname" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <input type="submit" className="btn btn-primary btn-lg btn-block" defaultValue="Enter Code" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* END Modal */}
  {/* loader */}
  <div id="site-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx={24} cy={24} r={22} fill="none" strokeWidth={4} stroke="#eeeeee" /><circle className="path" cx={24} cy={24} r={22} fill="none" strokeWidth={4} strokeMiterlimit={10} stroke="#F96D00" /></svg></div>
</div>

      
       
      
   </div>

      
      
    )
  }
}

export default Home;

