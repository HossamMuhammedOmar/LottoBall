import React, { Component } from 'react';
import Ball from './Ball';

class Lottery extends Component {
  static defaultProps = {
    title: 'Lottery',
    numBalls: 6,
    maxNum: 40,
  };

  state = {
    nums: [],
  };
  render() {
    return (
      <div className="Lottery">
        <h1>{this.props.title}</h1>
        <div>Balls Go Here!</div>
        <button>Generate</button>
      </div>
    );
  }
}

export default Lottery;
