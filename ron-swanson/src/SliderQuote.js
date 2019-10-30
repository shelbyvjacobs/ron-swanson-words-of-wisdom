import React, {Component} from 'react';
import './App.css';

class SliderQuote extends Component {
  shouldComponentUpdate(nextProps){
    return false;
  }

  render(){
    return (
      <Slider {...this.props.settings}>
        <div>
          <div className="card">
            <p>
              Lorem ipsum
            </p>
          </div>
        </div>
        <div>
          <div className="card">
            <p>
              Lorem ipsum dolor eget etat blah lorem ipsum dolor eget etat blah.
            </p>
          </div>
        </div>
        <div>
          <div className="card">
            <p>
              Lorem ipsum dolor eget etat blah lorem ipsum dolor eget etat blah.
            </p>
          </div>
        </div>

        <div>
          <div className="card">
            <p>
              Lorem ipsum dolor eget etat blah lorem ipsum dolor eget etat blah.
            </p>
          </div>
        </div>
        <div>
          <div className="card">
            <p>
              Lorem ipsum dolor eget etat blah lorem ipsum dolor eget etat blah.
            </p>
          </div>
        </div>

        <div>
          <div className="card">
            <p>
              Lorem ipsum dolor eget etat blah lorem ipsum dolor eget etat blah.
            </p>
          </div>
        </div>

        <div>
          <div className="card">
            <p>
              Lorem ipsum dolor eget etat blah lorem ipsum dolor eget etat blah.
            </p>
          </div>
        </div>
        <div>
          <div className="card">
            <p>
              Lorem ipsum dolor eget etat blah lorem ipsum dolor eget etat blah.
            </p>
          </div>
        </div>
      </Slider>
    )
  }

}

export default SliderQuote;