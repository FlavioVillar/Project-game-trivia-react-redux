import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getSaveNameScore from '../helpers/getNameScoreStorage';

class Ranking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ranking: [],
    };
  }

  componentDidMount() {
    const ranking = getSaveNameScore().sort((a, b) => b.score - a.score);
    this.setState({ ranking });
  }

  render() {
    const { ranking } = this.state;
    const { history, dispatch } = this.props;
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        {ranking.map((item, index) => (
          <div key={ index }>
            <img
              data-testid="header-profile-picture"
              src={ item.picture }
              alt="Imagem perfil"
            />
            <p data-testid={ `player-name-${index}` }>{item.name}</p>
            <p data-testid={ `player-score-${index}` }>{item.score}</p>
          </div>
        ))}

        <button
          data-testid="btn-go-home"
          type="button"
          onClick={ () => {
            dispatch({ type: 'SCORE_UPDATE', payload: 0 });
            history.push('/');
          } }
        >
          Voltar
        </button>
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default connect(null, null)(Ranking);
