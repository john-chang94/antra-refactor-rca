import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

export default function Navbar() {
	$('.primary-nav').css('height', $('.logo').height());
    $('.primary-nav li').css(
      'margin-top',
      ($('.primary-nav').height() - $('.primary-nav li').height()) / 2 + 'px'
    );
  
    // $(window).resize(function () {
    //   setTimeout(navigation, 500);
    // });

  return (
    <div className="navigation">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
            <div className="logo">
              <a href="index.html">
                <img src="images/logo.svg" />
              </a>
            </div>
          </div>

          <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
            <div className="primary-nav">
              <ul>
                <Link to="/">
                  <a href="index.html">Home</a>
                </Link>
                <Link to="/portfolio">
                  <a href="portfolio.html">Portfolio</a>
                </Link>
                <Link to="/contact">
                  <a href="contact.html">Contact</a>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
