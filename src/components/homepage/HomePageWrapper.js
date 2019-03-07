/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Slider from './Slider';

class HomePageWrapper extends Component {
  render() {
    return (
      <section>
        <div className="main-wrapper wide">
          <Slider />
        </div>
      </section>
    );
  }
}

export default HomePageWrapper;
