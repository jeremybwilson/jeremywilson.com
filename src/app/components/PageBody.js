import React from 'react';
import PropTypes from 'prop-types';

class PageBody extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="box">
          <span className="devicons icon-html5"></span>
          {/* <img src="./images/logo_html.png" /> */}
          <h3>HTML5 Markup</h3>
          <p>Well-formed semantic markup.</p>
        </div>
        <div className="box">
          <span className="devicons icon-css3"></span>
          {/* <img src="./images/logo_css.png" /> */}
          <h3>CSS3 Styling</h3>
          <p>CSS3, SASS, LESS</p>
        </div>
        <div className="box">
          <span className="devicons icon-js"></span>
          {/* <img src="./images/logo_js.png" /> */}
          <h3>JavaScript</h3>
          <p>Node, jQuery, ES2015</p>
        </div>
        <div className="box">
          <span className="devicons icon-general"></span>
          {/* <img src="./images/logo_brush.png" /> */}
          <h3>Project Management</h3>
          <p>Experienced Technical Project and Program Manager</p>
        </div>
      </div>
    )
  }
}

export default PageBody;
