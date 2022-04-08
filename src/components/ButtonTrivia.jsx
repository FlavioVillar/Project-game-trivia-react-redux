import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ButtonTrivia extends Component {
  render() {
    const {
      answerOptions,
      handleClick,
      getAnswer,
      correctAnswer,
      handleCorrectAnswer } = this.props;
    return (
      <div>
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
                           onClick={ () => {
                             handleClick();
                             handleCorrectAnswer();
                           } }
                           disabled={ getAnswer }
                           style={ {
                             border: getAnswer && '3px solid rgb(6, 240, 15)',
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
                         onClick={ handleClick }
                         disabled={ getAnswer }
                         style={ {
                           border: getAnswer && '3px solid rgb(255, 0, 0)',
                         } }
                       >
                         {answer}
                       </button>
                     );
                   }))}
      </div>
    );
  }
}

ButtonTrivia.propTypes = {
  answerOptions: PropTypes.shape({
    map: PropTypes.func,
  }),
  getAnswer: PropTypes.string,
  correctAnswer: PropTypes.any,
  handleClick: PropTypes.any,
}.isRequired;

export default ButtonTrivia;
