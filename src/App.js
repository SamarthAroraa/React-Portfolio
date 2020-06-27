import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  var inline = {
    backgroundImage: "url(/images/back_g.jpg)",
    // backgroundPosition: "bottom",
  };
  return (
    <div className="App">
      <div className="site-wrap">
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body"></div>
        </div>

        <header
          className="site-navbar py-4 js-sticky-header site-navbar-target"
          role="banner"
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-4">
                <h1 className="m-0 site-logo">
                  <a href="index.html">Services</a>
                </h1>
              </div>

              <div className="col-8">
                <nav
                  className="site-navigation position-relative text-right"
                  role="navigation"
                >
                  <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                    <li>
                      <a href="#home-section" className="nav-link">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#about-section" className="nav-link">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#services-section" className="nav-link">
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#projects-section" className="nav-link">
                        Projects
                      </a>
                    </li>
                    <li>
                      <a href="#blog-section" className="nav-link">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#contact-section" className="nav-link">
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>

                <a
                  href="#"
                  className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle float-right"
                >
                  <span className="icon-menu h3"></span>
                </a>
              </div>
            </div>
          </div>
        </header>

        <div
          className="site-blocks-cover overlay bg-light"
          style={inline}
          id="home-section"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center align-self-center text-intro">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h1
                      className="text-white"
                      data-aos="fade-up"
                      data-aos-delay=""
                    >
                      We Are Digital Services
                    </h1>
                    <p
                      className="lead text-white"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dignissimos magnam maxime voluptates libero, nobis impedit
                      aut corrupti sunt possimus.
                    </p>
                    <p data-aos="fade-up" data-aos-delay="200">
                      <a
                        href="#services-section"
                        className="btn smoothscroll btn-primary"
                      >
                        Our Services
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section" id="about-section">
          <div className="container">
            <div className="row ">
              <div className="col-12 mb-4 position-relative">
                <h2 className="section-title">About Us</h2>
              </div>
              <div className="col-lg-4">
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic life One day however a
                  small line of blind text by the name of Lorem Ipsum decided to
                  leave for the far World of Grammar.
                </p>

                <p>
                  The Big Oxmox advised her not to do so, because there were
                  thousands of bad Commas, wild Question Marks and devious
                  Semikoli, but the Little Blind Text didn’t listen.
                </p>
              </div>
              <div className="col-lg-4">
                <img src="images/about.jpg" alt="Image" className="img-fluid" />
              </div>
              <div className="col-lg-4">
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic life One day however a
                  small line of blind text by the name of Lorem Ipsum decided to
                  leave for the far World of Grammar.
                </p>

                <p>
                  The Big Oxmox advised her not to do so, because there were
                  thousands of bad Commas, wild Question Marks and devious
                  Semikoli, but the Little Blind Text didn’t listen.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section" id="services-section">
          <div className="container">
            <div className="row ">
              <div className="col-12 mb-5 position-relative">
                <h2 className="section-title text-center mb-5">Services</h2>
              </div>

              <div
                className="col-md-6 mb-4"
                data-aos="fade-up"
                data-aos-delay=""
              >
                <div className="service d-flex h-100">
                  <div className="svg-icon">
                    <img
                      src="images/flaticon/svg/002-travel-1.svg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="service-about">
                    <h3>Content Marketing</h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-md-6 mb-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="service d-flex h-100">
                  <div className="svg-icon">
                    <img
                      src="images/flaticon/svg/001-travel.svg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="service-about">
                    <h3>Social Media Marketing</h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-md-6 mb-4"
                data-aos="fade-up"
                data-aos-delay=""
              >
                <div className="service d-flex h-100">
                  <div className="svg-icon">
                    <img
                      src="images/flaticon/svg/003-travel-2.svg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="service-about">
                    <h3>Brand &amp; Logo Design</h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-md-6 mb-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="service d-flex h-100">
                  <div className="svg-icon">
                    <img
                      src="images/flaticon/svg/004-travel-3.svg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="service-about">
                    <h3>Social Media Advertising</h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-md-6 mb-4"
                data-aos="fade-up"
                data-aos-delay=""
              >
                <div className="service d-flex h-100">
                  <div className="svg-icon">
                    <img
                      src="images/flaticon/svg/005-travel-4.svg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="service-about">
                    <h3>Social Media Advertising</h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-md-6 mb-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="service d-flex h-100">
                  <div className="svg-icon">
                    <img
                      src="images/flaticon/svg/006-food.svg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="service-about">
                    <h3>Web Design / Development</h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="site-section block__62272" id="projects-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 position-relative">
                <h2 className="section-title text-center mb-5">Projects</h2>
              </div>
            </div>

            <div className="row justify-content-center mb-5" data-aos="fade">
              <div
                id="filters"
                className="filters text-center button-group col-md-7"
              >
                <button className="btn btn-primary active" data-filter="*">
                  All
                </button>
                <button className="btn btn-primary" data-filter=".web">
                  Web
                </button>
                <button className="btn btn-primary" data-filter=".design">
                  Design
                </button>
                <button className="btn btn-primary" data-filter=".brand">
                  Brand
                </button>
              </div>
            </div>

            <div id="posts" className="row no-gutter">
              <div className="item web col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                <a href="images/img_5.jpg" className="item-wrap fancybox">
                  <span className="icon-search2"></span>
                  <img className="img-fluid" src="images/img_5.jpg" />
                </a>
              </div>

              <div className="item brand col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                <a href="images/img_6.jpg" className="item-wrap fancybox">
                  <span className="icon-search2"></span>
                  <img className="img-fluid" src="images/img_6.jpg" />
                </a>
              </div>

              <div className="item web col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                <a href="images/img_7.jpg" className="item-wrap fancybox">
                  <span className="icon-search2"></span>
                  <img className="img-fluid" src="images/img_7.jpg" />
                </a>
              </div>

              <div className="item web col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                <a href="images/img_1.jpg" className="item-wrap fancybox">
                  <span className="icon-search2"></span>
                  <img className="img-fluid" src="images/img_1.jpg" />
                </a>
              </div>
              <div className="item web col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                <a href="images/img_2.jpg" className="item-wrap fancybox">
                  <span className="icon-search2"></span>
                  <img className="img-fluid" src="images/img_2.jpg" />
                </a>
              </div>

              <div className="item brand col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                <a href="images/img_3.jpg" className="item-wrap fancybox">
                  <span className="icon-search2"></span>
                  <img className="img-fluid" src="images/img_3.jpg" />
                </a>
              </div>

              <div className="item design col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                <a href="images/img_4.jpg" className="item-wrap fancybox">
                  <span className="icon-search2"></span>
                  <img className="img-fluid" src="images/img_4.jpg" />
                </a>
              </div>

              <div className="item design col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                <a href="images/img_8.jpg" className="item-wrap fancybox">
                  <span className="icon-search2"></span>
                  <img className="img-fluid" src="images/img_8.jpg" />
                </a>
              </div>

              <div className="item web col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                <a href="images/img_9.jpg" className="item-wrap fancybox">
                  <span className="icon-search2"></span>
                  <img className="img-fluid" src="images/img_9.jpg" />
                </a>
              </div>

              <div className="item design col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                <a href="images/img_10.jpg" className="item-wrap fancybox">
                  <span className="icon-search2"></span>
                  <img className="img-fluid" src="images/img_10.jpg" />
                </a>
              </div>

              <div className="item brand col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                <a href="images/img_11.jpg" className="item-wrap fancybox">
                  <span className="icon-search2"></span>
                  <img className="img-fluid" src="images/img_11.jpg" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="site-section bg-primary">
          <div className="container">
            <div className="row">
              <div className="col-12 mb-5 position-relative">
                <h2 className="section-title text-center mb-5 text-white">
                  What Client Are Sayings
                </h2>
              </div>
            </div>
            <div className="owl-carousel slide-one-item">
              <div className="slide">
                <blockquote>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                  </p>
                  <p>
                    <cite>&mdash; Jean Smith</cite>
                  </p>
                </blockquote>
              </div>
              <div className="slide">
                <blockquote>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </p>
                  <p>
                    <cite>&mdash; Carl Spencer</cite>
                  </p>
                </blockquote>
              </div>
              <div className="slide">
                <blockquote>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name of Lorem
                    Ipsum decided to leave for the far World of Grammar.
                  </p>
                  <p>
                    <cite>&mdash; Ryan Peters</cite>
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section className="site-section bg-light" id="blog-section">
          <div className="container">
            <div className="row">
              <div className="col-12 mb-5 position-relative">
                <h2 className="section-title text-center mb-5">Blog Posts</h2>
              </div>

              <div className="col-md-6 mb-5 mb-lg-0 col-lg-4">
                <div className="blog_entry">
                  <a href="single.html">
                    <img
                      src="images/blog_1.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </a>
                  <div className="p-4 bg-white">
                    <h3>
                      <a href="single.html">
                        A small river named Duden flows by their place
                      </a>
                    </h3>
                    <span className="date">April 25, 2019</span>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                    </p>
                    <p className="more">
                      <a href="single.html">Read More</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-5 mb-lg-0 col-lg-4">
                <div className="blog_entry">
                  <a href="single.html">
                    <img
                      src="images/blog_2.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </a>
                  <div className="p-4 bg-white">
                    <h3>
                      <a href="single.html">
                        A small river named Duden flows by their place
                      </a>
                    </h3>
                    <span className="date">April 25, 2019</span>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                    </p>
                    <p className="more">
                      <a href="single.html">Read More</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-5 mb-lg-0 col-lg-4">
                <div className="blog_entry">
                  <a href="single.html">
                    <img
                      src="images/blog_3.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </a>
                  <div className="p-4 bg-white">
                    <h3>
                      <a href="single.html">
                        A small river named Duden flows by their place
                      </a>
                    </h3>
                    <span className="date">April 25, 2019</span>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                    </p>
                    <p className="more">
                      <a href="single.html">Read More</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="site-section" id="contact-section">
          <div className="container">
            <div className="row">
              <div className="col-12 mb-5 position-relative">
                <h2 className="section-title text-center mb-5">Contact Form</h2>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-lg-6">
                <form action="#" className="form">
                  <div className="row mb-4">
                    <div className="form-group col-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                      />
                    </div>
                    <div className="form-group col-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full name"
                      />
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="form-group col-12">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email address"
                      />
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="form-group col-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject of the message"
                      />
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="form-group col-12">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        className="form-control"
                        placeholder="Type your message here.."
                      ></textarea>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="submit"
                        className="btn btn-primary"
                        value="Send Message"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-5">
                <h3>London</h3>
                <ul className="list-unstyled mb-5">
                  <li className="mb-3">
                    <strong className="d-block mb-1">Address</strong>
                    <span>
                      203 Fake St. Mountain View, San Francisco, California, USA
                    </span>
                  </li>
                  <li className="mb-3">
                    <strong className="d-block mb-1">Phone</strong>
                    <span>+1 232 3235 324</span>
                  </li>
                  <li className="mb-3">
                    <strong className="d-block mb-1">Email</strong>
                    <span>youremail@domain.com</span>
                  </li>
                </ul>

                <h3>New York</h3>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <strong className="d-block mb-1">Address</strong>
                    <span>
                      203 Fake St. Mountain View, San Francisco, California, USA
                    </span>
                  </li>
                  <li className="mb-3">
                    <strong className="d-block mb-1">Phone</strong>
                    <span>+1 232 3235 324</span>
                  </li>
                  <li className="mb-3">
                    <strong className="d-block mb-1">Email</strong>
                    <span>youremail@domain.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <footer className="site-section bg-light footer">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-3">
                <h3 className="footer-title">Services</h3>
                <p>
                  <span className="d-inline-block d-md-block">
                    203 Fake St. Mountain View,
                  </span>{" "}
                  San Francisco, California, USA
                </p>
              </div>
              <div className="col-md-5 mx-auto">
                <div className="row">
                  <div className="col-lg-4">
                    <h3 className="footer-title">Services</h3>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">Content Marketing</a>
                      </li>
                      <li>
                        <a href="#">Brand & Logo</a>
                      </li>
                      <li>
                        <a href="#">Social Advertising</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <h3 className="footer-title">Resources</h3>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">Social Marketing</a>
                      </li>
                      <li>
                        <a href="#">Web Design</a>
                      </li>
                      <li>
                        <a href="#">Web Development</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <h3 className="footer-title">Templates</h3>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">Illustration</a>
                      </li>
                      <li>
                        <a href="#">Video Editing</a>
                      </li>
                      <li>
                        <a href="#">Copywriting</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <h3 className="footer-title">Follow Me</h3>
                <a href="#" className="social-circle m-2">
                  <span className="icon-twitter"></span>
                </a>
                <a href="#" className="social-circle m-2">
                  <span className="icon-facebook"></span>
                </a>
                <a href="#" className="social-circle m-2">
                  <span className="icon-instagram"></span>
                </a>
                <a href="#" className="social-circle m-2">
                  <span className="icon-dribbble"></span>
                </a>
                <a href="#" className="social-circle m-2">
                  <span className="icon-linkedin"></span>
                </a>
              </div>
            </div>

            <div className="row">
              <div className="col-12 text-center">
                <p>
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script> All
                  rights reserved | This template is made with{" "}
                  <i className="icon-heart" aria-hidden="true"></i> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
