import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { thunkLoginAPI, actionScore } from '../Redux/Actions';
import HeaderJogo from '../components/HeaderJogo';
import ButtonTrivia from '../components/ButtonTrivia';
import fetchgravatarAPI from '../helpers/triviaAPI';

import * as S from './jogoStyle';

class Jogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      question: [],
      correctAnswer: '',
      wrongAnswer: [],
      answerOptions: '',
      getAnswer: false,
      difficulty: '',
      timerOver: 30,
      countAnswer: 0,
      sortAnswer: [],
    };
  }

  componentDidMount() {
    this.getAnswerFetchTrivia();
    this.validToken();
  }

   validToken = () => {
     const { token } = this.props;
     if (!token) thunkLoginAPI();
     else console.log('token validado');
   }

  handleClick = () => {
    const { countAnswer } = this.state;
    this.setState({
      getAnswer: true,
      countAnswer: countAnswer + 1,
    });
  }

  handleCorrectAnswer = () => {
    this.countScore();
  }

  countScore = () => {
    const { difficulty, timerOver } = this.state;
    const { score } = this.props;
    const ten = 10;
    const one = 1;
    const two = 2;
    const three = 3;
    let countScore;
    if (difficulty === 'easy') countScore = ten + (timerOver * one);
    else if (difficulty === 'medium') countScore = ten + (timerOver * two);
    else if (difficulty === 'hard') countScore = ten + (timerOver * three);
    score(countScore);
  }

  getAnswerFetchTrivia = async () => {
    const { token } = this.props;
    const data = await fetchgravatarAPI(token);
    this.setState({
      difficulty: data.results[0].difficulty,
      category: data.results[0].category,
      question: data.results[0].question,
      correctAnswer: data.results[0].correct_answer,
      wrongAnswer: data.results[0].incorrect_answers,
      answerOptions: [data.results[0].correct_answer,
        ...data.results[0].incorrect_answers],
    }, () => {
      this.timerSetup();
      const numberRandom = 0.5;
      const { answerOptions } = this.state;
      const sortAnswer = [...answerOptions].sort(() => Math.random() - numberRandom);
      this.setState({ sortAnswer });
    });
  }

   timerSetup = () => {
     const oneSeconds = 1000;
     const myIterval = setInterval(() => {
       const { timerOver, getAnswer } = this.state;
       if (timerOver === 0) {
         clearInterval(myIterval);
         return this.handleClick();
       }
       if (getAnswer) {
         return clearInterval(myIterval);
       }
       this.setState((prevState) => ({ timerOver: prevState.timerOver - 1 }));
     }, oneSeconds);
   }

  handleNextAnswer = async () => {
    const five = 5;
    const { countAnswer } = this.state;
    const { history } = this.props;
    await this.getAnswerFetchTrivia();
    this.setState({ getAnswer: false });
    this.setState({ timerOver: 30 });
    if (countAnswer === five) {
      history.push('/feedback');
      this.setState({ countAnswer: 0 });
    }
  }

  render() {
    const { category, question, timerOver, getAnswer } = this.state;
    return (
      <S.Container>
        <HeaderJogo />
        <S.ContainerQuestion>
          <S.Category
            data-testid="question-category"
          >
            {category}
          </S.Category>
          <S.Question
            data-testid="question-text"
          >
            {question}
          </S.Question>
          <ButtonTrivia
            { ...this.state }
            handleClick={ this.handleClick }
            handleCorrectAnswer={ this.handleCorrectAnswer }
          />
        </S.ContainerQuestion>
        <S.TimerContainer>
          <S.TimerPlacar>{timerOver}</S.TimerPlacar>
        </S.TimerContainer>
        <S.ContainerButton>
          {getAnswer && (
            <S.ButtonNext
              data-testid="btn-next"
              type="button"
              onClick={ this.handleNextAnswer }
            >
              Pr??xima
            </S.ButtonNext>
          )}
        </S.ContainerButton>
      </S.Container>
    );
  }
}

Jogo.propTypes = {
  token: PropTypes.any,
}.isRequired;

const mapStateToProps = (state) => ({ token: state.token });

const mapDispatchToProps = (dispatch) => ({
  score: (score) => dispatch(actionScore(score)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Jogo);
