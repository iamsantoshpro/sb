import React, { Component } from 'react'
import BannerImage from '../images/banner3.jpg'
const Parallax = require('parallax-js')

let image = {
    background:`center/cover no-repeat url(${BannerImage})`
}

class Banner extends Component{
    componentDidMount(){
            var scene=document.getElementById('circle-scene');
            new Parallax(scene,{relativeInput:true});
    }
    render(){
        return(
            <div className="banner-container home-hero-section" style={image}>
            <div id="circle-scene" data-invert-x="false" data-invert-y="false" data-limit-y="35" data-limit-x="35" className="circle-scene hero-section__circles hero-circles">
            <div data-depth="0.90" className="hero-circles__item hero-circles__first layer"></div>
            <div data-depth="0.60" className="hero-circles__item hero-circles__second layer"></div>
            <div data-depth="0.20" className="hero-circles__item hero-circles__third layer"></div>
            </div>
                <div className="banner-inner">
                    <div className="container">
                        <h1>{this.props.bannerTitle}</h1>
                        <p>{this.props.bannerSubtitle}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Banner