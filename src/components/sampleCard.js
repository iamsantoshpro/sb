import React, { Component } from 'react'

class sampleCard extends Component{
    render(){
        return(
            <div className="box box-hidden card-outer col-lg-3 col-sm-12">
                <div className="card">
                    <div className="card-image">
                        <img src={this.props.sampleImage} alt="Snacks"/>
                    </div>
                    <div className="card-details">
                        <h4>{this.props.sampleTitle}</h4>
                        <p>{this.props.sampleSubtitle}</p>
                    </div>
                </div>
            </div>   
        )
    }
}
export default sampleCard