import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { thunkLoginAPI, actionScore } from '../Redux/Actions';
import HeaderJogo from '../components/HeaderJogo';
import Timer from '../components/Timer';
import ButtonTrivia from '../components/ButtonTrivia';

class Jogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      question: '',
      correctAnswer: '',
      // wrongAnswer: [],
      answerOptions: '',
      borderColor: false,
      difficulty: '',
    };
  }

  componentDidMount() {
    this.getFetchTrivia();
  }

  componentDidUpdate() {
    this.validToken();
  }

   validToken = () => {
     const { token } = this.props;
     if (!token) {
       thunkLoginAPI();
     } else {
       console.log('token validado');
     }
   }

  handleClick = () => {
    this.setState({ borderColor: true });
  }

  handleCorrectAnswer = () => {
    this.countScore();
  }

  countScore = () => {
    const { difficulty } = this.state;
    const { timer, score } = this.props;
    const ten = 10;
    const one = 1;
    const two = 2;
    const three = 3;
    let countScore;
    if (difficulty === 'easy') countScore = ten + (timer * one);
    else if (difficulty === 'medium') countScore = ten + (timer * two);
    else if (difficulty === 'hard') countScore = ten + (timer * three);
    console.log(countScore);
    console.log(timer);
    score(countScore);
  }

  getFetchTrivia = async () => {
    const { token } = this.props;
    const url = `https://opentdb.com/api.php?amount=5&token=${token}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({
      difficulty: data.results[0].difficulty,
      category: data.results[0].category,
      question: data.results[0].question,
      correctAnswer: data.results[0].correct_answer,
      // wrongAnswer: data.results[0].incorrect_answers,
      answerOptions: data.results[0].incorrect_answers
        .concat(data.results[0].correct_answer).sort(() => Math.random() - 0.5),
    });
  }

  render() {
    const { category, question, borderColor } = this.state;
    return (
      <div>
        <HeaderJogo />
        {category && (
          <div data-testid="answer-options">
            <h3 data-testid="question-category">{category}</h3>
            <h3 data-testid="question-text">{question}</h3>
            <ButtonTrivia
              { ...this.state }
              handleClick={ this.handleClick }
              handleCorrectAnswer={ this.handleCorrectAnswer }
            />
          </div>
        )}
        <Timer borderColor={ borderColor } handleClick={ this.handleClick } />
      </div>
    );
  }
}

Jogo.propTypes = {
  email: PropTypes.any,
  token: PropTypes.any,
}.isRequired;

const mapStateToProps = (state) => ({
  token: state.token,
  email: state.playerGravatar.email,
  timer: state.timer,
});

const mapDispatchToProps = (dispatch) => ({
  score: (score) => dispatch(actionScore(score)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Jogo);
