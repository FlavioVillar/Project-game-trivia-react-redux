import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import { thunkLoginAPI, thunkGravatarAPI, actionNickEmail } from '../Redux/Actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: '',
      email: '',
      isdisabled: true,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      this.emailValidation();
    });
  }

  emailValidation = () => {
    const { email, nickname } = this.state;
    const regex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(email);
    if (email === '' || nickname === '' || !regex) {
      this.setState({ isdisabled: true });
    } else {
      this.setState({ isdisabled: false });
    }
  }

  convertMd5FromEmail = (item) => {
    const md5Email = md5(item).toString();
    const { gravatarUrl } = this.props;
    gravatarUrl(md5Email);
  }

  render() {
    const { nickname, email, isdisabled } = this.state;
    const { token, history, getNickEmail } = this.props;
    return (
      <div>
        <h1>Login</h1>
        <input
          data-testid="input-player-name"
          type="text"
          name="nickname"
          value={ nickname }
          onChange={ this.handleChange }
          placeholder="Nickname"
        />
        <input
          data-testid="input-gravatar-email"
          type="email"
          name="email"
          value={ email }
          onChange={ this.handleChange }
          placeholder="Email"
        />
        <button
          type="button"
          disabled={ isdisabled }
          data-testid="btn-play"
          onClick={ async () => {
            this.convertMd5FromEmail(email);
            getNickEmail(nickname, email);
            await token(token);
            history.push('/jogo');
          } }
        >
          Play

        </button>
        <button
          type="button"
          data-testid="btn-settings"
          onClick={ () => {
            history.push('/configuração');
          } }
        >
          Configuração
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  token: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  token: () => dispatch(thunkLoginAPI()),
  getNickEmail: (nickname, email) => dispatch(actionNickEmail(nickname, email)),
  gravatarUrl: (md5Email) => dispatch(thunkGravatarAPI(md5Email)),
});

export default connect(null, mapDispatchToProps)(Login);
