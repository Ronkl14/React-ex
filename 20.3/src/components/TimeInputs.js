import React, { Component } from "react";

class TimeInputs extends Component {
  state = {
    seconds: 0,
    minutes: 0,
    hours: 0,
  };

  handleSecondsChange = (e) => {
    const seconds = parseFloat(e.target.value) || 0;
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    this.setState({
      seconds,
      minutes: minutes % 60,
      hours,
    });
  };

  handleMinutesChange = (e) => {
    const minutes = parseFloat(e.target.value) || 0;
    const seconds = minutes * 60;
    const hours = Math.floor(minutes / 60);
    this.setState({
      seconds,
      minutes,
      hours,
    });
  };

  handleHoursChange = (e) => {
    const hours = parseFloat(e.target.value) || 0;
    const minutes = hours * 60;
    const seconds = minutes * 60;
    this.setState({
      seconds,
      minutes,
      hours,
    });
  };

  render() {
    const { seconds, minutes, hours } = this.state;
    return (
      <div>
        <label>
          Seconds:
          <input
            type="number"
            step="1"
            value={seconds}
            onChange={this.handleSecondsChange}
          />
        </label>
        <br />
        <label>
          Minutes:
          <input
            type="number"
            step="1"
            value={minutes}
            onChange={this.handleMinutesChange}
          />
        </label>
        <br />
        <label>
          Hours:
          <input
            type="number"
            step="1"
            value={hours}
            onChange={this.handleHoursChange}
          />
        </label>
      </div>
    );
  }
}

export default TimeInputs;
