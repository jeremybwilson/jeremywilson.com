import React from 'react';
import PropTypes from 'prop-types';
import Header from "./Header";
import PageBody from './PageBody';
import Footer from "./Footer";

class SitePicker extends React.Component {
  // constructor(){
  //   super();
  //   this.goToBlog = this.goToBlog.bind(this);
  //   console.log('Gonna create a component!');
  // }

  static propTypes = {
    history: PropTypes.object
  }

  goToBlog = (event) => {
    // 1. stop the form from submitting
    event.preventDefault();
    // 2. get the text from that input
    const blogUrl = '/blog';
    // console.log(this);
    // console.log(`blogUrl: ${blogUrl}`);
    // 3. change the page to /blog
    this.props.history.push(`${blogUrl}`);
  };

  render(){
    return(
      <React.Fragment>
        <Header tagline="Jeremy Wilson" />
        <section className="showcase">
          <div className="container">
            <h1 onClick={this.goToBlog}>Full Stack Web Developer, <br />Web Producer, Technical Project Manager</h1>
            {/* <p>Say what you mean, mean what you say.</p> */}
          </div>
        </section>
        <section className="boxes">
          <PageBody/>
        </section>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default SitePicker;
