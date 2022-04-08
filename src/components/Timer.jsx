import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionTimerScore } from '../Redux/Actions';

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
    const oneSeconds = 1000;
    const myIterval = setInterval(() => {
      const { timerOver } = this.state;
      const { borderColor, timerScore } = this.props;

      if (timerOver === 0) {
        clearInterval(myIterval);
        return handleClick();
      }

      // console.log(timerOver);
      if (borderColor) {
        clearInterval(myIterval);
        return timerScore(timerOver);
      }

      this.setState((prevState) => ({
        timerOver: prevState.timerOver - 1,
      }), () => timerScore(timerOver));
    },

    oneSeconds);
  }

  render() {
    const { timerOver } = this.state;
    return (
      <div>{timerOver}</div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  timerScore: (timerOver) => dispatch(actionTimerScore(timerOver)),
});

Timer.propTypes = {
  borderColor: PropTypes.any,
}.isRequired;

export default connect(null, mapDispatchToProps)(Timer);
