import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderFeedback from '../components/HeaderFeeback';
import setSaveNameScore from '../helpers/setNameScoreStorage';
import * as S from './feedbackStyle';

class FeedBack extends Component {
  componentDidMount() {
    const { name, picture, score } = this.props;
    setSaveNameScore({ name, picture, score });
  }

  getAssertions = () => {
    const { assertions } = this.props;
    const three = 3;
    if (assertions < three) {
      return 'Could be better...';
    }
    return 'Well Done!';
  }

  render() {
    const { assertions, score, history, dispatch } = this.props;
    return (
      <S.Container>
        <HeaderFeedback />
        <S.Container3>
          <S.Score2 data-testid="feedback-total-score">{score}</S.Score2>
          <S.Message data-testid="feedback-text">{this.getAssertions()}</S.Message>
          <S.Score2 data-testid="feedback-total-question">{assertions}</S.Score2>
          <S.Buttons
            data-testid="btn-play-again"
            type="button"
            onClick={ () => history.push('/') }
          >
            Play Again
          </S.Buttons>
          <S.Buttons
            data-testid="btn-ranking"
            type="button"
            onClick={ () => {
              dispatch({ type: 'SCORE_UPDATE', payload: 0 });
              history.push('/ranking');
            } }
          >
            Ranking
          </S.Buttons>
        </S.Container3>
      </S.Container>
    );
  }
}

FeedBack.propTypes = {
  assertions: PropTypes.any,
}.isRequired;

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
  name: state.player.nome,
  picture: state.playerGravatar.imgGravatar,
});
export default connect(mapStateToProps, null)(FeedBack);
