import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo/logo.png";
import './footer.css';
const Footer = () => {
  return (
    <div className="bg-dark mt-3 text-white">
      <div className="row container">
        <div className="col-md-12  col-lg-4 col-12">
          <div>
            <img className="img fluid my-3" src={logo} alt="" />
            <p>
              To serve the humanity as a whole with this noble vision the Saika
              Health Care Center started its journey in January 2021
            </p>
          </div>
          <div>
            <p>
              <span>
                <i class="fas fa-address-card"></i>
              </span>{" "}
              Address: xyz-1200 Dhaka
            </p>
            <p>
              <span>
                <i class="fas fa-phone"></i>
              </span>{" "}
              Hotline: 64-4444555
            </p>
            <p>
              <span>
                <i class="fas fa-envelope"></i>
              </span>{" "}
              info : info@shhc.com
            </p>
          </div>
        </div>

        <div className="col-md-12 col-lg-4 col-12">
          <div className="mt-lg-5 mt-sm-2 mt-md-2 ms-lg-5 ms-md-0 sm-0">
            <ul className="footer">
              <li>
                {" "}
                <Link className=" text-white" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/services">
                  Services
                </Link>
              </li>
              <li>
                {" "}
                <Link className=" text-white" to="/contactUs">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div class="all-icon">
           <Link   to="https://www.facebook.com/"><i class="fab fa-facebook"></i></Link>
            <Link   to="https://www.instagram.com/"><i class="fab fa-instagram"></i></Link>
           <Link  to="https://twitter.com/home"> <i class="fab fa-twitter"></i></Link>
            <Link to="https://www.youtube.com/"><i class="fab fa-youtube"></i></Link>
        </div>
        </div>

        <div className="col-md-12 col-lg-4 col-12">
          <div className="px-sm-5">
            <h4 className="text-white my-3 order-1 order-lg-2 order-md-2">
              Get the App
            </h4>
            <Link target="_blank" to="https://www.apple.com/app-store/">
              <img
                className="my-3 "
                src="https://i.ibb.co/8j2SFB5/App-Store-Badge.png"
                alt=""
              />
            </Link>
            <br />
            <Link target et="_blank" to="https://play.google.com/store/apps">
              <img
                src="https://i.ibb.co/TRzp92C/Google-Play-Badge.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center pb-3"><small>© sharifulmamun7@gmail.com</small></p>
    </div>
  );
};

export default Footer;
