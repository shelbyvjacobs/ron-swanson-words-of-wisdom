import React, {Component} from 'react';
import './App.css';
// import ControlledCarousel from "./SliderQuote.js";


class Slider extends Component {
    state = {
        apiUrl: "http://ron-swanson-quotes.herokuapp.com/v2/quotes/5",
        quotes: [],
        i: 0
    }

    // slideshow = () => {
        
    // }

    componentDidMount(){
        fetch ('http://ron-swanson-quotes.herokuapp.com/v2/quotes/5', {
          headers: {
            'Accept': "application/json"
          }
        }
        )
        .then(res => res.json())
        .then(res => {
          this.setState({ quotes: res });
        }) 
        .catch(err => console.log(err)); 
      }


    render(){
        return (
            <div className="Slider">
                <h3 className="quote">{this.state.quotes[0]}</h3>
                <h3 className="quote">{this.state.quotes[1]}</h3>
                <h3 className="quote">{this.state.quotes[2]}</h3>
                <h3 className="quote">{this.state.quotes[3]}</h3>
                <h3 className="quote">{this.state.quotes[4]}</h3>
                {/* <ControlledCarousel /> */}
            </div>
        )
    }
}

export default Slider;