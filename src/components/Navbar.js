import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

export default function Navbar() {
  function navigation() {
    $('.primary-nav').css('height', $('.logo').height());
    $('.primary-nav li').css(
      'margin-top',
      ($('.primary-nav').height() - $('.primary-nav li').height()) / 2 + 'px'
    );
  
    $(window).resize(function () {
      setTimeout(navigation, 500);
    });
  }

  useEffect(() => {
    navigation();
  }, [])

  return (
    <div className="navigation">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
            <div className="logo">
              <Link to="/">
                <img src="images/logo.svg" />
              </Link>
            </div>
          </div>

          <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
            <div className="primary-nav">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
