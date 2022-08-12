import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const logoRef = useRef();

  useEffect(() => {
    console.log(logoRef.current.clientHeight);
  }, []);

  return (
    <div className="navigation">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
            <div className="logo" ref={logoRef}>
              <Link to="/">
                <img src="images/logo.svg" />
              </Link>
            </div>
          </div>

          <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
            <div className="primary-nav">
              <ul>
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
