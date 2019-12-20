import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './Timer.scss';

let countdown = 40;

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTimerTicking: true,
      countdown: 40
    };
  }

  makeTimerTick(){
    this.interval = setInterval(() => this.setState({countdown : --countdown}), 1000);
    console.log('Ticking Function: ENABLED');
  }

  componentDidMount = async () => {
    await setTimeout(() => {
      this.setState({ isTimerTicking: false});
    }, 40000);  
    await this.setState({countdown: 40});
    await this.makeTimerTick(); 
  }

  componentWillUnmount(){
    clearInterval(this.interval);
    console.log('Ticking Function: DISABLED');
  }

  render() {
    if (this.state.isTimerTicking) {
      return <div id="countdown">
        <svg className="mySvg">
          <circle r="18" cx="20" cy="20"></circle>
          <text x="50%" y="50%" textAnchor="middle" stroke="black" strokeWidth="2px" dy=".3em">{`${this.state.countdown}`}</text>
        </svg>
      </div>;
    } else {
      console.log('I, the Timer Component, executed a dirty JavaScript alert() l34');
      return (
        <div>{this.state.isTimerTicking? alert('You lose the game.') : console.log('You didnt eat the popup!')}
          <Redirect to="/congratulations" />
        </div>);
    }
  }
}