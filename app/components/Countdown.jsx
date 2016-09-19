import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';
import Controls from 'Controls';

export default class Countdown extends React.Component {
  constructor(props) {
    super(props);
    // Bind 'this' contexts for Countdown class methods
    this.handleSetCountdown = this.handleSetCountdown.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
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
        case 'stopped':
          this.setState({ count: 0});
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined;
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

  handleStatusChange(newStatus) {
    this.setState({
      countdownStatus: newStatus
    });
  }

  render() {
    let { count, countdownStatus } = this.state;
    let renderControlArea = () => {
      if(countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
      }
    }

    return(
      <div>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
}
