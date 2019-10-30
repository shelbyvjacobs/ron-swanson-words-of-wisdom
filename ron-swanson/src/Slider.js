import React, {Component} from 'react';
import './App.css';
import SliderQuote from "./SliderQuote";

class Slider extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedFooter: 1,
      apiUrl: "http://ron-swanson-quotes.herokuapp.com/v2/quotes/5",
      quotes: []
    };

    this.settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

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
                <SliderQuote settings={this.settings} />
                {/* <h3 className="quote">{this.state.quotes[0]}</h3>
                <h3 className="quote">{this.state.quotes[1]}</h3>
                <h3 className="quote">{this.state.quotes[2]}</h3>
                <h3 className="quote">{this.state.quotes[3]}</h3>
                <h3 className="quote">{this.state.quotes[4]}</h3> */}
            </div>
        )
    }
}

export default Slider;