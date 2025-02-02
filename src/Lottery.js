import React, { Component } from 'react';
import Ball from './Ball';
import './Lottery.css';

class Lottery extends Component {
  static defaultProps = {
    title: 'Lottery',
    numBalls: 6,
    maxNum: 40,
  };

  state = {
    nums: Array.from({ length: this.props.numBalls }),
  };

  generate() {
    this.setState((currentState) => ({
      nums: currentState.nums.map(
        (n) => Math.floor(Math.random() * this.props.maxNum) + 1
      ),
    }));
  }

  handleClick = () => {
    this.generate();
  };
  render() {
    return (
      <div className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map((n) => (
            <Ball num={n} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </div>
    );
  }
}

export default Lottery;
