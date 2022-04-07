import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { thunkLoginAPI } from '../Redux/Actions';
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

  getFetchTrivia = async () => {
    const { token } = this.props;
    const url = `https://opentdb.com/api.php?amount=5&token=${token}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      category: data.results[0].category,
      question: data.results[0].question,
      correctAnswer: data.results[0].correct_answer,
      // wrongAnswer: data.results[0].incorrect_answers,
      answerOptions: data.results[0].incorrect_answers
        .concat(data.results[0].correct_answer),
      // concatena as respostas corretas e as incorretas em um array e retorna um array
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
            <ButtonTrivia { ...this.state } handleClick={ this.handleClick } />
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
});

export default connect(mapStateToProps, null)(Jogo);
