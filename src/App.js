import React,{Component} from 'react';
import Header from './components/header';
import Footer from './components/footer';
import './App.css';
import $ from "jquery";

class App extends Component {
  componentDidMount(){
    $('.dl-trigger').click(function(){
      $('body').toggleClass('mobile-open');
    });
  }
  render() {
    return (
      <div id="page" className="App">
      <Header />
      <Footer />
      </div>
    );
  }
}

export default App;
