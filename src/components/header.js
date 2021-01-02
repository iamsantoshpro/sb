import React from 'react';
import Banner from '../components/banner'
import CardContent from '../components/cardContent'
import AboutUs from '../components/about'
import GetInTouch from '../components/contact'
import Gallery from '../components/gallery'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import LogoImage from '../images/Logo.png';
import HomeContent from '../components/home'

function Header(){
    return(
        <Router>
        <header className="App-header">
        <div className="container">
            <div className="row clearfix">
            <div className="logo-container col-lg-4 col-sm-12">
                <Link to="/">
                    <img src={LogoImage} alt="The SBSC Group"/>
                </Link>
            </div>
            <div className="custom-menu-primary col-lg-8 col-sm-12">
                <div id="dl-menu" className="dl-menuwrapper">
                <button className="dl-trigger">Menu</button>
                    <ul className="dl-menu">
                    <li><Link to="/features">Features</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
        </header>
        <Switch>
  
            <Route exact path="/">
                <Banner bannerTitle="Welcome to SBSC Group" bannerSubtitle="Shree Balaji Sweets and Catters" />
                <HomeContent />
            </Route>
        
            <Route exact path="/features">
                <CardContent />
            </Route>

            <Route exact path="/about">
                <Banner bannerSubtitle="Sample About Subtitle" bannerTitle="About SBSC Group" />
                <AboutUs />
            </Route>
        
            <Route exact path="/gallery">
                <Gallery/>
            </Route>

            <Route exact path="/contact">
                <GetInTouch/>
            </Route>            
        </Switch>
        </Router>
    )
}
export default Header;