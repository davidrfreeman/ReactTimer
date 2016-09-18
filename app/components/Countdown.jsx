import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';

export default class Countdown extends React.Component {
  constructor(props) {
    super(props);
    // Bind 'this' context for handleSetCountdown method
    this.handleSetCountdown = this.handleSetCountdown.bind(this);
    this.startTimer = this.startTimer.bind(this);

    this.state = {
      count: 0,
      countdownStatus: 'stopped'
    }
  }

  componentDidUpdate(prevProps, prevState) {

    // If the state of countdownStatus has changed then we can do things based on what the countdownStatus is
    if(this.state.countdownStatus !== prevState.countdownStatus) {
      switch(this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
      };
    }
  }

  startTimer() {
    this.timer = setInterval(() => {
      let newCount = this.state.count - 1;
      this.setState({
        // Checks to make sure the timer uses only positive numbers
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000)
  }

  handleSetCountdown(seconds) {
    this.setState({
      // The seconds arg comes from the number entered into CountdownForm
      count: seconds,
      // Change countdownStatus to 'started'
      countdownStatus: 'started'
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
