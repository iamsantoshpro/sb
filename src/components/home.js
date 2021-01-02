import React from 'react'
import CardContent from '../components/cardContent'
import AboutUs from '../components/about'
import GetInTouch from './contact'

function HomeContent(){
    return(
        <React.Fragment>
            <CardContent/>
            <AboutUs />
            <GetInTouch />
        </React.Fragment>
    )
}
export default HomeContent