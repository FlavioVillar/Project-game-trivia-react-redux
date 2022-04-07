import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOver: 30,
    };
  }

  componentDidMount() {
    this.timerSetup();
  }

  timerSetup = () => {
    const { handleClick } = this.props;
    const thirtySeconds = 1000;
    const myIterval = setInterval(() => {
      const { timerOver } = this.state;
      if (timerOver === 0) {
        clearInterval(myIterval);
        return handleClick();
      }
      this.setState((prevState) => ({
        timerOver: prevState.timerOver - 1,
      }));
    }, thirtySeconds);
  }

  render() {
    const { timerOver } = this.state;
    return (
      <div>{timerOver}</div>
    );
  }
}

Timer.propTypes = {
  borderColor: PropTypes.any,
}.isRequired;

export default Timer;
