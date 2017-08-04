import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomepageSlider />
        <MainNav />
      </div>
    );
  }
}
class HomepageSlider extends Component {
  render() {
    return (
        <div id="home-slider">
            <div className="overlay"></div>

            <div className="slider-text">
            	<div id="slidecaption"></div>
            </div>

        	<div className="control-nav">
                <a id="prevslide" className="load-item"><i className="font-icon-arrow-simple-left"></i></a>
                <a id="nextslide" className="load-item"><i className="font-icon-arrow-simple-right"></i></a>
                <ul id="slide-list"></ul>

                <a id="nextsection" href="#work"><i className="font-icon-arrow-simple-down"></i></a>
            </div>
        </div>
    );
  }
}
class MainNav extends Component {
  render() {
    return (
      <header>
          <div className="sticky-nav">
          	<a id="mobile-nav" className="menu-nav" href="#menu-nav"></a>

              <div id="logo">
              	<a id="goUp" href="#home-slider" title="Brushed | Responsive One Page Template">Brushed Template</a>
              </div>

              <nav id="menu">
              	<ul id="menu-nav">
                  	<li className="current"><a href="#home-slider">Home</a></li>
                      <li><a href="#work">Our Work</a></li>
                      <li><a href="#about">About Us</a></li>
                      <li><a href="#contact">Contact</a></li>
      				<li><a href="shortcodes.html" className="external">Shortcodes</a></li>
                  </ul>
              </nav>

          </div>
      </header>
    );
  }
}
export default App;
