import React from 'react'
import { AvForm, AvField } from 'availity-reactstrap-validation';
import {Button} from 'reactstrap'
import axios from 'axios'

class GetInTouch extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          name: "",
          email: "",
          message: ""
        }
        this.handleChnage = this.handleChnage.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }
      handleChnage = e => {
        this.setState({[e.target.name]:e.target.value})
      }  
      async handleSubmit(e){
        e.persist();
        const {name,email,message} = this.state
        console.log(name,email,message)
        if(name.length && email.length && message.length){
           await axios.post('/api/form', {
            name,
            email,
            message
          })
         }
      }


render(){
      return(
      <div id="contact" className="contact-details">
          <div className="container">
              <div className="row">
                  <div className="title col-lg-12">
                      <h2>Get in touch</h2>
                  </div>
                  <div className="form-contact col-lg-12">
                      <div className="row">
                          <div className="form col-lg-6">
                          <h4>Shree Balaji Sweets &amp; Catters</h4>
                          <p>Reach Us Through The Contact Form Or The Details Given Below:</p>
                          <br/>
                          <br/>
                          <React.Fragment>
                          <AvForm onSubmit={this.handleSubmit} >
                          <AvField name="name" label="Name: " type="text"  onChange={this.handleChnage} required />
                          <AvField name="email" label="Email Address: " type="email"  onChange={this.handleChnage} required />
                          <AvField name="message" label="Message: " type="textarea"  onChange={this.handleChnage} required />
                          <Button color="primary">Submit</Button>
                          </AvForm>
                          </React.Fragment>
                          </div>
                          <div className="address-wrapper col-lg-6">
                          
                          <div className="address-box">

                          <h3>Contect Details</h3>

                                                          <div className="address-contact">
                                  <span className="fa-stack"><i className="fa fa-circle fa-stack-2x"></i><i className="fa fa-map-marker fa-stack-1x fa-inverse"></i></span>

                                  <div className="address-content">Main 30 Foota Road , Vinay Nagar <br/> Faridabad <br/> Haryana 121013 <br/> India</div>
                              </div>
                          
                                                          <div className="address-contact">
                                  <span className="fa-stack"><i className="fa fa-circle fa-stack-2x"></i><i className="fa fa-phone fa-stack-1x fa-inverse"></i></span>
                                  <div className="address-content">+91 - 7503172030</div>
                              </div>
                          
                                                          <div className="address-contact">
                                  <span className="fa-stack"><i className="fa fa-circle fa-stack-2x"></i><i className="fa fa-envelope-o fa-stack-1x fa-inverse"></i></span>
                                  <div className="address-content"><a href="mailto:thesbscgroup@gmail.com">thesbscgroup@gmail.com</a></div>
                              </div>
                          
                                                  </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
            )
      }
}
export default GetInTouch