import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getSaveNameScore from '../helpers/getNameScoreStorage';

import * as S from './rakingStyle';

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
      <S.Container>
        <div>
          <S.Container3>
            <S.RankingTitle
              data-testid="ranking-title"
            >
              Ranking
            </S.RankingTitle>
          </S.Container3>
          <S.Container2>
            {ranking.map((item, index) => (
              <S.Container4 key={ index }>
                <S.Avatar
                  data-testid="header-profile-picture"
                  src={ item.picture }
                  alt="Imagem perfil"
                />
                <S.NamePlayer
                  data-testid={ `player-name-${index}` }
                >
                  {item.name}
                </S.NamePlayer>
                <S.Score data-testid={ `player-score-${index}` }>{item.score}</S.Score>
                <hr style={ { width: '250px' } } />
              </S.Container4>
            ))}

            <S.Button
              data-testid="btn-go-home"
              type="button"
              onClick={ () => {
                dispatch({ type: 'SCORE_UPDATE', payload: 0 });
                history.push('/');
              } }
            >
              Voltar
            </S.Button>
          </S.Container2>
        </div>
      </S.Container>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default connect(null, null)(Ranking);
