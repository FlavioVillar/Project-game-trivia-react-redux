import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ButtonTrivia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortQuestion: this.sorteioDeQuestao(),

    };
  }

  sorteioDeQuestao = () => {
    const numberRandom = 0.5;
    const { answerOptions } = this.props;
    console.log(answerOptions);
    return answerOptions.sort(() => Math.random() - numberRandom);
  }

  render() {
    const {
      answerOptions,
      handleClick,
      borderColor,
      correctAnswer,
      handleCorrectAnswer } = this.props;
    const { sortQuestion } = this.state;
    return (
      <div>
        { answerOptions
                 && (
                   sortQuestion.map((answer, index) => {
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
                           disabled={ borderColor }
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
                         onClick={ handleClick }
                         disabled={ borderColor }
                         style={ {
                           border: borderColor && '3px solid rgb(255, 0, 0)',
                         } }
                       >
                         {answer}
                       </button>
                     );
                   }))}
        {/* Método sort combinado com função  para retornar uma ordem aleatória vito em :  https://www.codecademy.com/forum_questions/4f609c49e0bd2b0003011313 */}
      </div>
    );
  }
}

ButtonTrivia.propTypes = {
  answerOptions: PropTypes.shape({
    map: PropTypes.func,
  }),
  borderColor: PropTypes.string,
  correctAnswer: PropTypes.any,
  handleClick: PropTypes.any,
}.isRequired;

export default ButtonTrivia;
