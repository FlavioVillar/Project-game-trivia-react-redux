import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as S from '../Pages/jogoStyle';

class HeaderJogo extends Component {
  render() {
    const { nome, url, score } = this.props;
    return (
      <S.HeaderContainer>
        {url
          && (
            <S.HeaderAlign>
              <S.Avatar
                data-testid="header-profile-picture"
                src={ url }
                alt="Imagem perfil"
              />
              <S.NameUser data-testid="header-player-name">{nome}</S.NameUser>
              <S.Score data-testid="header-score">{score}</S.Score>
            </S.HeaderAlign>
          )}
      </S.HeaderContainer>
    );
  }
}

HeaderJogo.propTypes = {
  nome: PropTypes.any,
  url: PropTypes.any,
}.isRequired;

const mapStateToProps = (state) => {
  const { playerGravatar } = state;
  return {
    nome: state.player.nome,
    url: playerGravatar.imgGravatar,
    score: state.player.score,
  };
};

export default connect(mapStateToProps, null)(HeaderJogo);
