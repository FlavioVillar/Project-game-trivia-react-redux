import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderFeedback from '../components/HeaderFeeback';

class FeedBack extends Component {
  getAssertions = () => {
    const { assertions } = this.props;
    const three = 3;
    if (assertions < three) {
      return 'Could be better...';
    }
    return 'Well Done!';
  }

  render() {
    const { assertions, score, history } = this.props;
    return (
      <div>
        <HeaderFeedback />
        <p data-testid="feedback-total-score">{score}</p>
        <h1 data-testid="feedback-text">{this.getAssertions()}</h1>
        <h1 data-testid="feedback-total-question">{assertions}</h1>
        <button
          data-testid="btn-play-again"
          type="button"
          onClick={ () => history.push('/') }
        >
          Play Again
        </button>
        <button
          data-testid="btn-ranking"
          type="button"
          onClick={ () => history.push('/ranking') }
        >
          Ranking
        </button>
      </div>
    );
  }
}

FeedBack.propTypes = {
  assertions: PropTypes.any,
}.isRequired;

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});
export default connect(mapStateToProps, null)(FeedBack);
