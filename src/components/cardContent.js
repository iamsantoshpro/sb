import React, { Component } from "react";
import Specialities from '../components/specialities'

import cardImage1 from '../images/sweets.jpg'
import cardImage2 from '../images/snacks.jpg'
import cardImage3 from '../images/events-.jpg'
import cardImage4 from '../images/catering-2.jpeg'

// import Slider from "react-slick";

export default class CardContent extends Component {
    render() {

      return (
        <React.Fragment>
    <div id="features" className="Our-Specialities-container">
    <div className="container">
    <div className="row">
    <div className="title col-lg-12">
    <h2>Our Specialities</h2>
    </div>
    <div className="card-wrapper col-lg-12">
    <div className="row slick-slider-container"> 
{/* <Slider {...settings}> */}
        <Specialities cardImage={cardImage1} cardImageAlt="Sweets Image" cardTitle="Sweets" cardContent="We Make &amp; Provide Best Sweets In The MArkets. One For Your Every Special Occasions."/>
        
        <Specialities cardImage={cardImage2} cardImageAlt="Snacks Image" cardTitle="Snacks" cardContent="We Provides Best Snacks, It’s like a mouth full of joy."/>

        <Specialities cardImage={cardImage3} cardImageAlt="Event Organization Image" cardTitle="Event Organization" cardContent="We Can Plan &amp; Execute All Of Your Special Occasions &amp; Events So, You Don’t Have To Worry About That"/>

        <Specialities cardImage={cardImage4} cardImageAlt="Catering Service Image" cardTitle="Catering Service" cardContent="We Provide Top Notch Catering Service For Your Special Day "/>
        {/* </Slider> */}
    </div>
    </div>
    </div>
    </div>
    </div>
    </React.Fragment>
      );
    }
  }