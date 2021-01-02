import React, { Component } from 'react'

class Specialities extends Component{
    render(){
        return(
        <div className="card-outer col-lg-3 col-sm-12">
            <div className="card">
            <div className="card-image">
                <img src={this.props.cardImage} alt={this.props.cardImageAlt}/>
            </div>
            <div className="card-details">
                <h4>{this.props.cardTitle}</h4>
                <p>{this.props.cardContent}</p>
            </div>
            </div>
        </div>                  
        )
    }
}
export default Specialities;