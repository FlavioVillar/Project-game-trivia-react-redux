import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class HeaderFeedback extends Component {
  render() {
    const { nome, url, score } = this.props;
    return (
      <div>
        {url
          && (
            <header>
              <img data-testid="header-profile-picture" src={ url } alt="Imagem perfil" />
              <h3 data-testid="header-player-name">{nome}</h3>
              <h3 data-testid="header-score">{score}</h3>
            </header>
          )}
      </div>
    );
  }
}

HeaderFeedback.propTypes = {
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

export default connect(mapStateToProps, null)(HeaderFeedback);
