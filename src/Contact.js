// import React,{Component} from 'react'
// import { AvForm, AvField } from 'availity-reactstrap-validation';
// import {Button} from 'reactstrap'
// import axios from 'axios'
// class Contact extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       name: "",
//       email: "",
//       message: ""
//     }
//     this.handleChnage = this.handleChnage.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }
//   handleChnage = e => {
//     this.setState({[e.target.name]:e.target.value})
//   }  
//   async handleSubmit(e){
//     e.persist();
//     const {name,email,message} = this.state
//     if(name.length && email.length && message.length){
//       const form = await axios.post('/api/form', {
//         name,
//         email,
//         message
//       })
//   }
//   }
//   render(){
//     var formCss = {
//       width:"400px",
//       margin: "0 auto",
//       padding: "30px 0"
//     }
//     return(
//       <React.Fragment>
//         <AvForm  onSubmit={this.handleSubmit} style={formCss}>
//           <AvField name="name" label="Name: " type="text"  onChange={this.handleChnage} required />
//           <AvField name="email" label="Email Address: " type="email"  onChange={this.handleChnage} required />
//           <AvField name="message" label="Message: " type="textarea"  onChange={this.handleChnage} required />
//           <Button color="primary">Submit</Button>
//         </AvForm>
//     </React.Fragment>
//     )
//   }
// }
// export default Contact;