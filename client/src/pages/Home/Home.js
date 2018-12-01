import React, { Component } from "react";
// import  * from '../../utils';
import Choice from '../../Components/Choice/Choice';
import Navbar from '../../Components/Navbar/Navbar';
import Modal from '../../Components/Modal/Modal';
import Choiceone from '../../Components/Choice/Choiceone';
import queryString from "query-string";
import * as firebaseui from 'firebaseui';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <title>Colorlib Template - EatWell</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700|Raleway" rel="stylesheet" />
          <link rel="stylesheet" href="css/bootstrap.min.css" />
          <link rel="stylesheet" href="css/open-iconic-bootstrap.min.css" />
          <link rel="stylesheet" href="css/animate.css" />
          <link rel="stylesheet" href="css/owl.carousel.min.css" />
          <link rel="stylesheet" href="css/owl.theme.default.min.css" />
          <link rel="stylesheet" href="css/magnific-popup.css" />
          <link rel="stylesheet" href="css/bootstrap-datepicker.css" />
          <link rel="stylesheet" href="css/jquery.timepicker.css" />
          <link rel="stylesheet" href="css/icomoon.css" />
        <link rel="stylesheet" href="css/style.css" />
        <nav className="navbar navbar-expand-lg navbar-dark site_navbar bg-dark site-navbar-light" id="site-navbar">
          <div className="container">
            <a className="navbar-brand" href="index.html">EatWell</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#site-nav" aria-controls="site-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="oi oi-menu" /> Menu
            </button>
            <div className="collapse navbar-collapse" id="site-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active"><a href="#section-home" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="#section-about" className="nav-link">About</a></li>
                <li className="nav-item"><a href="#section-offer" className="nav-link">Offer</a></li>
                <li className="nav-item"><a href="#section-menu" className="nav-link">Menu</a></li>
                <li className="nav-item"><a href="#section-news" className="nav-link">News</a></li>
                <li className="nav-item"><a href="#section-gallery" className="nav-link">Gallery</a></li>
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
                <h1 className="site-heading site-animate mb-3">Welcome To EatWell</h1>
                <h2 className="h5 site-subheading mb-5 site-animate">Come and eat well with our delicious &amp; healthy foods.</h2>    
                <p><a href="https://colorlib.com/" target="_blank" className="btn btn-outline-white btn-lg site-animate" data-toggle="modal" data-target="#reservationModal">Reservation</a></p>
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
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <p><a href="/" className="btn btn-secondary btn-lg">Learn More About Us</a></p>
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
                <h4 className="site-sub-title">Our Offers</h4>
                <h2 className="display-4">Our Offer This Summer</h2>
                <div className="row justify-content-center">
                  <div className="col-md-7">
                    <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="owl-carousel site-owl">
                  <div className="item">
                    <div className="media d-block mb-4 text-center site-media site-animate border-0">
                      <img src="images/offer_1.jpg" alt="Free Template by colorlib.com" className="img-fluid" />
                      <div className="media-body p-md-5 p-4">
                        <h5 className="text-primary">$19.50</h5>
                        <h5 className="mt-0 h4">Beef with Sausage</h5>
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="mb-0"><a href="/" className="btn btn-primary btn-sm">Order Now!</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="media d-block mb-4 text-center site-media site-animate border-0">
                      <img src="images/offer_2.jpg" alt="Free Template by colorlib.com" className="img-fluid" />
                      <div className="media-body p-md-5 p-4">
                        <h5 className="text-primary">$29.50</h5>
                        <h5 className="mt-0 h4">Egg with Garlic </h5>
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="mb-0"><a href="/" className="btn btn-primary btn-sm">Order Now!</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="media d-block mb-4 text-center site-media site-animate border-0">
                      <img src="images/offer_3.jpg" alt="Free Template by colorlib.com" className="img-fluid" />
                      <div className="media-body p-md-5 p-4">
                        <h5 className="text-primary">$11.50</h5>
                        <h5 className="mt-0 h4">Beef Ribs</h5>
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="mb-0"><a href="/" className="btn btn-primary btn-sm">Order Now!</a></p>
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
                  <div className="item">
                    <div className="media d-block mb-4 text-center site-media site-animate border-0">
                      <img src="images/offer_3.jpg" alt="Free Template by colorlib.com" className="img-fluid" />
                      <div className="media-body p-md-5 p-4">
                        <h5 className="text-primary">$53.50</h5>
                        <h5 className="mt-0 h4">Beef Ribs</h5>
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="mb-0"><a href="/" className="btn btn-primary btn-sm">Order Now!</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="media d-block mb-4 text-center site-media site-animate border-0">
                      <img src="images/offer_1.jpg" alt="Free Template by colorlib.com" className="img-fluid" />
                      <div className="media-body p-md-5 p-4">
                        <h5 className="text-primary">$22.50</h5>
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
                        <h5 className="text-primary">$39.50</h5>
                        <h5 className="mt-0 h4">Fresh Salmon Fish</h5>
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="mb-0"><a href="/" className="btn btn-primary btn-sm">Order Now!</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="media d-block mb-4 text-center site-media site-animate border-0">
                      <img src="images/offer_3.jpg" alt="Free Template by colorlib.com" className="img-fluid" />
                      <div className="media-body p-md-5 p-4">
                        <h5 className="text-primary">$39.50</h5>
                        <h5 className="mt-0 h4">Beef Ribs</h5>
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
        <section className="site-section" id="section-menu">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center mb-5 site-animate">
                <h2 className="display-4">Delicious Menu</h2>
                <div className="row justify-content-center">
                  <div className="col-md-7">
                    <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 text-center">
                <ul className="nav site-tab-nav nav-pills mb-5" id="pills-tab" role="tablist">
                  <li className="nav-item site-animate">
                    <a className="nav-link active" id="pills-breakfast-tab" data-toggle="pill" href="#pills-breakfast" role="tab" aria-controls="pills-breakfast" aria-selected="true">Breakfast</a>
                  </li>
                  <li className="nav-item site-animate">
                    <a className="nav-link" id="pills-lunch-tab" data-toggle="pill" href="#pills-lunch" role="tab" aria-controls="pills-lunch" aria-selected="false">Lunch</a>
                  </li>
                  <li className="nav-item site-animate">
                    <a className="nav-link" id="pills-dinner-tab" data-toggle="pill" href="#pills-dinner" role="tab" aria-controls="pills-dinner" aria-selected="false">Dinner</a>
                  </li>
                </ul>
                <div className="tab-content text-left">
                  <div className="tab-pane fade show active" id="pills-breakfast" role="tabpanel" aria-labelledby="pills-breakfast-tab">
                    <div className="row">
                      <div className="col-md-6 site-animate">
                        <div className="media menu-item">
                          <img className="mr-3" src="images/menu_1.jpg" alt="Free Template by colorlib.com" />
                          <div className="media-body">
                            <h5 className="mt-0">Salted Fried Chicken</h5>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <h6 className="text-primary menu-price">$35.50</h6>
                          </div>
                        </div>
                        <div className="media menu-item">
                          <img className="mr-3" src="images/menu_2.jpg" alt="Free Template by colorlib.com" />
                          <div className="media-body">
                            <h5 className="mt-0">Italian Sauce Mushroom</h5>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <h6 className="text-primary menu-price">$24.50</h6>
                          </div>
                        </div>
                        <div className="media menu-item">
                          <img className="mr-3" src="images/menu_3.jpg" alt="Free Template by colorlib.com" />
                          <div className="media-body">
                            <h5 className="mt-0">Fried Potato w/ Garlic</h5>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <h6 className="text-primary menu-price">$14.50</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 site-animate">
                        <div className="media menu-item">
                          <img className="mr-3" src="images/menu_2.jpg" alt="Free Template by colorlib.com" />
                          <div className="media-body">
                            <h5 className="mt-0">Italian Sauce Mushroom</h5>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <h6 className="text-primary menu-price">$35.50</h6>
                          </div>
                        </div>
                        <div className="media menu-item">
                          <img className="mr-3" src="images/menu_1.jpg" alt="Free Template by colorlib.com" />
                          <div className="media-body">
                            <h5 className="mt-0">Salted Fried Chicken</h5>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <h6 className="text-primary menu-price">$12.50</h6>
                          </div>
                        </div>
                        <div className="media menu-item">
                          <img className="mr-3" src="images/menu_3.jpg" alt="Free Template by colorlib.com" />
                          <div className="media-body">
                            <h5 className="mt-0">Fried Potato w/ Garlic</h5>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <h6 className="text-primary menu-price">$18.50</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-lunch" role="tabpanel" aria-labelledby="pills-lunch-tab">
                    <div className="row">
                      <div className="col-md-6 site-animate">
                        <div className="media menu-item">
                          <img className="mr-3" src="images/menu_3.jpg" alt="Free Template by colorlib.com" />
                          <div className="media-body">
                            <h5 className="mt-0">Fried Potato w/ Garlic</h5>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <h6 className="text-primary menu-price">$14.50</h6>
                          </div>
                        </div>
                        <div className="media menu-item">
                          <img className="mr-3" src="images/menu_1.jpg" alt="Free Template by colorlib.com" />
                          <div className="media-body">
                            <h5 className="mt-0">Salted Fried Chicken</h5>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <h6 className="text-primary menu-price">$35.50</h6>
                          </div>
                        </div>
                        <div className="media menu-item">
                          <img className="mr-3" src="images/menu_2.jpg" alt="Free Template by colorlib.com" />
                          <div className="media-body">
                            <h5 className="mt-0">Italian Sauce Mushroom</h5>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <h6 className="text-primary menu-price">$24.50</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 site-animate">
                        <div className="media menu-item">
                          <img className="mr-3" src="images/menu_3.jpg" alt="Free Template by colorlib.com" />
                          <div className="media-body">
                            <h5 className="mt-0">Fried Potato w/ Garlic</h5>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <h6 className="text-primary menu-price">$18.50</h6>
                          </div>
                        </div>
                        <div className="media menu-item">
                          <img className="mr-3" src="images/menu_2.jpg" alt="Free Template by colorlib.com" />
                          <div className="media-body">
                            <h5 className="mt-0">Italian Sauce Mushroom</h5>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <h6 className="text-primary menu-price">$35.50</h6>
                          </div>
                        </div>
                        <div className="media menu-item">
                          <img className="mr-3" src="images/menu_1.jpg" alt="Free Template by colorlib.com" />
                          <div className="media-body">
                            <h5 className="mt-0">Salted Fried Chicken</h5>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <h6 className="text-primary menu-price">$12.50</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-dinner" role="tabpanel" aria-labelledby="pills-dinner-tab">
                    <div className="row">
                      <div className="col-md-6 site-animate">
                        <div className="media menu-item">
                          <img className="mr-3" src="images/menu_2.jpg" alt="Free Template by colorlib.com" />
                          <div className="media-body">
                            <h5 className="mt-0">Italian Sauce Mushroom</h5>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <h6 className="text-primary menu-price">$24.50</h6>
                          </div>
                        </div>
                        <div className="media menu-item">
                          <img className="mr-3" src="images/menu_1.jpg" alt="Free Template by colorlib.com" />
                          <div className="media-body">
                            <h5 className="mt-0">Salted Fried Chicken</h5>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <h6 className="text-primary menu-price">$35.50</h6>
                          </div>
                        </div>
                        <div className="media menu-item">
                          <img className="mr-3" src="images/menu_3.jpg" alt="Free Template by colorlib.com" />
                          <div className="media-body">
                            <h5 className="mt-0">Fried Potato w/ Garlic</h5>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <h6 className="text-primary menu-price">$14.50</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 site-animate">
                        <div className="media menu-item">
                          <img className="mr-3" src="images/menu_3.jpg" alt="Free Template by colorlib.com" />
                          <div className="media-body">
                            <h5 className="mt-0">Fried Potato w/ Garlic</h5>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <h6 className="text-primary menu-price">$18.50</h6>
                          </div>
                        </div>
                        <div className="media menu-item">
                          <img className="mr-3" src="images/menu_2.jpg" alt="Free Template by colorlib.com" />
                          <div className="media-body">
                            <h5 className="mt-0">Italian Sauce Mushroom</h5>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <h6 className="text-primary menu-price">$35.50</h6>
                          </div>
                        </div>
                        <div className="media menu-item">
                          <img className="mr-3" src="images/menu_1.jpg" alt="Free Template by colorlib.com" />
                          <div className="media-body">
                            <h5 className="mt-0">Salted Fried Chicken</h5>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <h6 className="text-primary menu-price">$12.50</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END section */}
        <section className="site-section bg-light" id="section-news">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center mb-5 site-animate">
                <h2 className="display-4">News</h2>
                <div className="row justify-content-center">
                  <div className="col-md-7">
                    <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="media d-block mb-4 text-center site-media site-animate">
                  <img src="images/offer_1.jpg" alt="Free Template by colorlib.com" className="img-fluid" />
                  <div className="media-body p-md-5 p-4">
                    <h5 className="mt-0 h4">We Have Dilecious Food</h5>
                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p className="mb-0"><a href="/" className="btn btn-primary btn-sm">Read More</a></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="media d-block mb-4 text-center site-media site-animate">
                  <img src="images/offer_2.jpg" alt="Free Template by colorlib.com" className="img-fluid" />
                  <div className="media-body p-md-5 p-4">
                    <h5 className="mt-0 h4">Chef Special Menu</h5>
                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p className="mb-0"><a href="/" className="btn btn-primary btn-sm">Read More</a></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="media d-block mb-4 text-center site-media site-animate">
                  <img src="images/offer_3.jpg" alt="Free Template by colorlib.com" className="img-fluid" />
                  <div className="media-body p-md-5 p-4">
                    <h5 className="mt-0 h4">Merriage Celebrations</h5>
                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p className="mb-0"><a href="/" className="btn btn-primary btn-sm">Read More</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END section */}
        <section className="site-section" id="section-gallery">
          <div className="container">
            <div className="row site-custom-gutters">
              <div className="col-md-12 text-center mb-5 site-animate">
                <h2 className="display-4">Gallery</h2>
                <div className="row justify-content-center">
                  <div className="col-md-7">
                    <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 site-animate">
                <a href="images/menu_1.jpg" className="site-thumbnail image-popup">
                  <img src="images/menu_1.jpg" alt="Free Template by colorlib.com" className="img-fluid" />
                </a>
              </div>
              <div className="col-md-4 site-animate">
                <a href="images/menu_2.jpg" className="site-thumbnail image-popup">
                  <img src="images/menu_2.jpg" alt="Free Template by colorlib.com" className="img-fluid" />
                </a>
              </div>
              <div className="col-md-4 site-animate">
                <a href="images/menu_3.jpg" className="site-thumbnail image-popup">
                  <img src="images/menu_3.jpg" alt="Free Template by colorlib.com" className="img-fluid" />
                </a>
              </div>
              <div className="col-md-4 site-animate">
                <a href="images/menu_2.jpg" className="site-thumbnail image-popup">
                  <img src="images/menu_2.jpg" alt="Free Template by colorlib.com" className="img-fluid" />
                </a>
              </div>
              <div className="col-md-4 site-animate">
                <a href="images/menu_3.jpg" className="site-thumbnail image-popup">
                  <img src="images/menu_3.jpg" alt="Free Template by colorlib.com" className="img-fluid" />
                </a>
              </div>
              <div className="col-md-4 site-animate">
                <a href="images/menu_1.jpg" className="site-thumbnail image-popup">
                  <img src="images/menu_1.jpg" alt="Free Template by colorlib.com" className="img-fluid" />
                </a>
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
                    <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
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
                  Address: <br /> 121 Street, Melbourne Victoria <br /> 3000 Australia <br /> <br />
                  Phone: <br /> 90 987 65 44 <br /> <br />
                  Email: <br /> <a href="mailto:info@yoursite.com">info@yoursite.com</a>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, similique, delectus blanditiis odit expedita amet. Sed labore ipsum vel dolore, quis, culpa et magni autem sequi facere eos tenetur, ex?</p>
                  </div>
                  <div className="col-md-1" />
                  <div className="col-md-3 site-animate">
                    <div className="site-footer-widget mb-4">
                      <h2 className="site-heading-2">The Restaurant</h2>
                      <ul className="list-unstyled">
                        <li><a href="/" className="py-2 d-block">About Us</a></li>
                        <li><a href="/" className="py-2 d-block">Chefs</a></li>
                        <li><a href="/" className="py-2 d-block">Events</a></li>
                        <li><a href="/" className="py-2 d-block">Contact</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-2 site-animate">
                    <div className="site-footer-widget mb-4">
                      <h2 className="site-heading-2">Useful links</h2>
                      <ul className="list-unstyled">
                        <li><a href="/" className="py-2 d-block">Foods</a></li>
                        <li><a href="/" className="py-2 d-block">Drinks</a></li>
                        <li><a href="/" className="py-2 d-block">Breakfast</a></li>
                        <li><a href="/" className="py-2 d-block">Brunch</a></li>
                        <li><a href="/" className="py-2 d-block">Dinner</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-2 site-animate">
                    <div className="site-footer-widget mb-4">
                      <h2 className="site-heading-2">Useful links</h2>
                      <ul className="list-unstyled">
                        <li><a href="/" className="py-2 d-block">Foods</a></li>
                        <li><a href="/" className="py-2 d-block">Drinks</a></li>
                        <li><a href="/" className="py-2 d-block">Breakfast</a></li>
                        <li><a href="/" className="py-2 d-block">Brunch</a></li>
                        <li><a href="/" className="py-2 d-block">Dinner</a></li>
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
                <p>© {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
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
                    <h1 className="mb-4">Reserve A Table</h1>  
                    <form action="/" method="post">
                      <div className="row">
                        <div className="col-md-6 form-group">
                          <label htmlFor="m_fname">First Name</label>
                          <input type="text" className="form-control" id="m_fname" />
                        </div>
                        <div className="col-md-6 form-group">
                          <label htmlFor="m_lname">Last Name</label>
                          <input type="text" className="form-control" id="m_lname" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 form-group">
                          <label htmlFor="m_email">Email</label>
                          <input type="email" className="form-control" id="m_email" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 form-group">
                          <label htmlFor="m_people">How Many People</label>
                          <select name id="m_people" className="form-control">
                            <option value={1}>1 People</option>
                            <option value={2}>2 People</option>
                            <option value={3}>3 People</option>
                            <option value="4+">4+ People</option>
                          </select>
                        </div>
                        <div className="col-md-6 form-group">
                          <label htmlFor="m_phone">Phone</label>
                          <input type="text" className="form-control" id="m_phone" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 form-group">
                          <label htmlFor="m_date">Date</label>
                          <input type="text" className="form-control" id="m_date" />
                        </div>
                        <div className="col-md-6 form-group">
                          <label htmlFor="m_time">Time</label>
                          <input type="text" className="form-control" id="m_time" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 form-group">
                          <label htmlFor="m_message">Message</label>
                          <textarea className="form-control" id="m_message" cols={30} rows={7} defaultValue={""} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 form-group">
                          <input type="submit" className="btn btn-primary btn-lg btn-block" defaultValue="Reserve Now" />
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
    );
  }
};
