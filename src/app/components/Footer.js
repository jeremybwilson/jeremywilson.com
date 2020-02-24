import React from "react";
import PropTypes from "prop-types";

const Footer = props => {
  return(
    <footer>
      <ul id="menu-social" className="footer-icons">
        <li className="fab fa-linkedin"><a target="_blank" href="https://www.linkedin.com/in/jeremybwilson"
            title="LinkedIn">LinkedIn</a></li>
        <li className="fab fa-github-square"><a target="_blank" href="https://github.com/jeremybwilson"
            title="Github">Github</a></li>
        <li className="fab fa-codepen"><a target="_blank" href="https://www.codepen.io/jeremyinrenton/"
            title="CodePen">CodePen</a></li>
        <li className="fab fa-twitter-square"><a target="_blank" href="https://twitter.com/jeremybwilson"
            title="Twitter">Twitter</a></li>
        <li className="fab fa-youtube"><a target="_blank" href="https://www.youtube.com/user/jeremybwilson"
            title="YouTube">YouTube</a></li>
        <li className="fab fa-instagram"><a target="_blank" href="https://instagram.com/jeremybwilson"
            title="Instagram">Instagram</a></li>
      </ul>
      <div className="footer-text">
        <div>&copy; <span className="current-year"></span> Wilson Design Technologies, &nbsp;</div>
        <div>Built with <a href="https://webpack.js.org/" target="_blank" title="Webpack">Webpack</a> in</div>
        <div className="washington-icon"><a href="https://www.google.com/maps/place/Seattle,%20WA" target="_blank"
            title="Seattle">&nbsp;</a></div>{/* ./ END non-Bootstrap markup */}
      </div>
    </footer>
  );
}

export default Footer;
