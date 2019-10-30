import React, {Component} from 'react';

class Slider extends Component {
    state = {
        apiUrl: "http://ron-swanson-quotes.herokuapp.com/v2/quotes/5",
        quotes: []
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
      }


    render(){
        return (
            <div className="slider">
                <h2 className="quote">{this.state.quotes[0]}</h2>
            </div>
        )
    }
}

export default Slider;