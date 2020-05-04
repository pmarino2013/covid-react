import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.Tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  Tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Reloj con React JS</h1>
        <h2>Son las: {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
