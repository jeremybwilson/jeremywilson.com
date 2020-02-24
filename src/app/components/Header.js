import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

// class Header extends React.Component {
const Header = (props) => {

  return(
    <header>
      <div id="header-section" className="nav-container" data-section-type="header-section" data-section-id="header"
          data-swap-rate="2.5" data-button="multi">{/* START non-Bootstrap markup */}
        <div className="branding-container">
          <div className="name-container">
            <h1>{props.tagline}</h1>
          </div>
          <div id="double-promo-wrapper" className="branding">
            <div className="promo-banner active">
              <h1>Web Developer</h1>
            </div>
            <div className="promo-banner">
              <h1>Project Manager</h1>
            </div>
            <div className="promo-banner">
              <h1>Responsive Design Evangelist</h1>
            </div>
          </div>
        </div>{/* end .branding-container */}
        <div className="nav-container">
          <nav>
            <ul>
              <li>
                <Link to="/" title="Home">Home</Link>
              </li>
              <li className="divider">&nbsp;</li>
              <li>
                <Link to="/blog" title="Blog">Blog</Link>
              </li>
              <li className="divider">&nbsp;</li>
              {/* <li><Link to="https://www.linkedin.com/in/jeremybwilson">Resume</Link></li> */}
              {/* <li><a href="/" title="Home">Home</a></li> */}
              {/* <li><a title="Blog" onClick={this.goToBlog}>Blog</a></li> */}
              {/* <li><a href="/blog" title="Blog" onClick={this.goToBlog}>Blog</a></li> */}
              <li><a href="https://www.linkedin.com/in/jeremybwilson" target="_blank" title="Resume">Resume</a></li>
              {/* <li><a href="services.html" title="Services">Services</a></li> */}
            </ul>
          </nav>
        </div>
      </div>
      {/* end .nav-container */}
    </header>
  )
}



export default Header;
