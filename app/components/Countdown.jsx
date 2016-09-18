import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';

export default class Countdown extends React.Component {
  constructor(props) {
    super(props);
    // Bind 'this' context for handleSetCountdown method
    this.handleSetCountdown = this.handleSetCountdown.bind(this);

    this.state = {
      count: 0
    }
  }

  handleSetCountdown(seconds) {
    this.setState({
      count: seconds
    });
  }

  render() {
    let { count } = this.state;
    return(
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }
}
