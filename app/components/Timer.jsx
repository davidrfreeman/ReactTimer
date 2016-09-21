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
      let newCount = this.state.count + 1;
      this.setState({
        // Checks to make sure the timer uses only positive numbers
        count: newCount
      });

      if(newCount === 0) {
        this.setState({timerStatus: 'stopped'});
      }
    }, 1000)
  }

  handleStatusChange(newStatus) {
    this.setState({
      timerStatus: newStatus
    });
    console.log(this.state.timerStatus);
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
