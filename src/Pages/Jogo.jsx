import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { thunkLoginAPI } from '../Redux/Actions';
import HeaderJogo from '../components/HeaderJogo';

class Jogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      question: '',
      correctAnswer: '',
      // wrongAnswer: [],
      answerOptions: '',
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

  getFetchTrivia = async () => {
    const { token } = this.props;
    const url = `https://opentdb.com/api.php?amount=5&token=${token}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({
      category: data.results[0].category,
      question: data.results[0].question,
      correctAnswer: data.results[0].correct_answer,
      // wrongAnswer: data.results[0].incorrect_answers,
      answerOptions: data.results[0].incorrect_answers
        .concat(data.results[0].correct_answer).sort(),
    });
  }

  render() {
    const numberRandom = 0.5;
    const { category, question, correctAnswer, answerOptions } = this.state;
    console.log(answerOptions);
    return (
      <div>
        <HeaderJogo />
        {category && (
          <div data-testid="answer-options">
            <h3 data-testid="question-category">{category}</h3>
            <h3 data-testid="question-text">{question}</h3>
            { answerOptions
                 && (
                   answerOptions.map((answer, index) => {
                     if (answer === correctAnswer) {
                       return (
                         <button
                           key={ index }
                           data-testid="correct-answer"
                           type="button"
                           //  onClick={ () => this.getFetchTrivia() }
                         >
                           {answer}
                         </button>
                       );
                     }
                     return (
                       <button
                         key={ index }
                         data-testid={ `wrong-answer-${index}` }
                         type="button"
                         //  onClick={ () => this.getFetchTrivia() }
                       >
                         {answer}
                       </button>
                     );
                   }).sort(() => Math.random() - numberRandom))}
          </div>
        )}
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
});

export default connect(mapStateToProps, null)(Jogo);
