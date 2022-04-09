import PropTypes from 'prop-types';
import React, { Component } from 'react';

import * as S from '../Pages/jogoStyle';

class ButtonTrivia extends Component {
  render() {
    const {
      handleClick,
      sortAnswer,
      getAnswer,
      correctAnswer,
      handleCorrectAnswer } = this.props;
    return (
      <S.Container4 data-testid="answer-options">
        { sortAnswer.length > 0
                 && (
                   sortAnswer.map((answer, index) => {
                     if (answer === correctAnswer) {
                       //  compara se a resposta é igual a resposta correta e retorna no 1º button a resposta correta e no  2º button a resposta errada
                       //  cria um button com a/s resposta/s errada/s e um com a resposta certa.
                       return (
                         <S.ButtonQuestions
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
                         </S.ButtonQuestions>
                       );
                     }
                     return (
                       <S.ButtonQuestions
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
                       </S.ButtonQuestions>
                     );
                   }))}
      </S.Container4>
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
