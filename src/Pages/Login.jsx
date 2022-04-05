import React, { Component } from 'react';

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

  render() {
    const { nickname, email, isdisabled } = this.state;
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
        >
          Play

        </button>
      </div>
    );
  }
}

export default Login;
