import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class HeaderJogo extends Component {
  render() {
    const { nome, url } = this.props;
    return (
      <div>
        {url
          && (
            <header>
              <img data-testid="header-profile-picture" src={ url } alt="Imagem perfil" />
              <h3 data-testid="header-player-name">{nome}</h3>
              <h3 data-testid="header-score">0</h3>
            </header>
          )}
      </div>
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
    nome: playerGravatar.nome,
    url: playerGravatar.imgGravatar,
  };
};
// função que pega o estado e retorna para o componente.

export default connect(mapStateToProps, null)(HeaderJogo);
