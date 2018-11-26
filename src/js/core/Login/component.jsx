// @flow
import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { ToastStore } from 'react-toasts';
import type { LoginProps, LoginState } from './container';
import css from './styles.module.scss';
import UserActions from '../../store/actions/user.actions';
import AuthActions from '../../store/actions/auth.actions';
import history from '../../routing/history';

class Login extends React.PureComponent<LoginProps, LoginState> {
  state = {
    username: '',
    password: '',
    loading: false,
  };

  userActions = new UserActions();

  authActions = new AuthActions();

  componentDidMount = () => {
    this.userActions.getCurrentUser();
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.userLoggedIn && nextProps.currentUser !== null) {
      history.push('/play');
    }
    return prevState;
  }

  handleUpdateUsername = (e): void => {
    this.setState({
      username: e.target.value,
    });
  };

  handleUpdatePassword = (e): void => {
    this.setState({
      password: e.target.value,
    });
  };

  handleSubmitLogin = (e): void => {
    const { username, password, email } = this.state;
    e.preventDefault();
    this.setState({
      loading: true,
    });

    if (username.length > 0 && password.length >= 6) {
      this.authActions.loginUser({
        username,
        password,
      }, this.loginUserCallback);
    } else {
      ToastStore.error('Please make sure you fill out both username and password.');
      this.setState({
        loading: false,
      });
    }
  };

  loginUserCallback = (errors: Array<string> = []): void => {
    if (errors.length > 0) {
      ToastStore.error('There was a problem trying to log you in.');
    } else {
      ToastStore.success('Thanks for logging in! Enjoy the game :)');
    }

    this.setState({
      loading: false,
    });
  };

  render() {
    const {
      username, password, loading,
    } = this.state;

    return (
      <div className={css.login}>
        <h1>Login</h1>
        <Form
          inverted
          onSubmit={this.handleSubmitLogin}
        >
          <Form.Field>
            <label>Username</label>
            <input
              placeholder="Username"
              value={username}
              onChange={this.handleUpdateUsername}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={this.handleUpdatePassword}
              placeholder="min. 6 characters"
            />
          </Form.Field>
          <Form.Field>
            <span>
              Looking to register instead?&nbsp;
              <Link to="/register">Click here</Link>
            </span>
          </Form.Field>
          <Button
            type="submit"
            color="yellow"
            loading={loading}
            disabled={loading}
          >
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
