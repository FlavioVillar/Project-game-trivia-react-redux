import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import { thunkLoginAPI, thunkGravatarAPI } from '../Redux/Actions';

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

  convertMd5FromEmail = (email) => {
    const { nickname } = this.state;
    const md5Email = md5(email).toString();
    const { loginNickEmail } = this.props;
    loginNickEmail(md5Email, nickname, email);
  }

  render() {
    const { nickname, email, isdisabled } = this.state;
    const { token, history } = this.props;
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
  loginNickEmail:
    (md5Email, nickname, email) => dispatch(thunkGravatarAPI(md5Email, nickname, email)),
});

export default connect(null, mapDispatchToProps)(Login);
