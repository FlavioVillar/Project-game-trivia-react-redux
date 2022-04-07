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
      borderColor: false,
    };
  }

  componentDidMount() {
    this.getFetchTrivia();
  }
  // Chama função da API quando o componente é montado.

  componentDidUpdate() {
    this.validToken();
  }
  // chama função que valida o token cada vez que o componente é montado.

  validToken = () => {
    const { token } = this.props;
    if (!token) {
      thunkLoginAPI();
    } else {
      console.log('token validado');
    }
  }
  // verifica se o Token (com validade de 6 horas) ainda está ativo.

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
  // função que chama a API e retorna os dados da pergunta.

  render() {
    const numberRandom = 0.5;
    const { category, question, correctAnswer, answerOptions, borderColor } = this.state;
    // const wrongAnswer = answerOptions.filter(answer => answer !== correctAnswer);
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
                       //  compara se a resposta é igual a resposta correta e retorna no 1º button a resposta correta e no  2º button a resposta errada
                       //  cria um button com a/s resposta/s errada/s e um com a resposta certa.
                       return (
                         <button
                           key={ index }
                           data-testid="correct-answer"
                           type="button"
                           onClick={ this.handleClick }
                           style={ {
                             border: borderColor && '3px solid rgb(6, 240, 15)',
                           } }
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
                         onClick={ this.handleClick }
                         style={ {
                           border: borderColor && '3px solid rgb(255, 0, 0)',
                         } }
                       >
                         {answer}
                       </button>
                     );
                   }).sort(() => Math.random() - numberRandom))}
            {/* Método sort combinado com função  para retornar uma ordem aleatória vito em :  https://www.codecademy.com/forum_questions/4f609c49e0bd2b0003011313 */}
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
