import React from 'react';
import Clock from 'Clock';
import Controls from 'Controls';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.startTimer = this.startTimer.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);

    this.state = {
      count: 0,
      timerStatus: 'stopped'
    }
  }

  componentDidUpdate(prevProps, prevState) {

    // If the state of countdownStatus has changed then we can do things based on what the countdownStatus is
    if(this.state.timerStatus !== prevState.timerStatus) {
      switch(this.state.timerStatus) {
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
      this.setState({
        // Checks to make sure the timer uses only positive numbers
        count: this.state.count + 1
      });
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleStatusChange(newTimerStatus) {
    this.setState({
      timerStatus: newTimerStatus
    });
  }

  render() {
    let { count, timerStatus } = this.state;

    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    );
  }
}
