// @flow
import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { ToastStore } from 'react-toasts';
import { Link } from 'react-router-dom';
import type { RegisterProps, RegisterState } from './container';
import css from './styles.module.scss';
import UserActions from '../../store/actions/user.actions';

import history from '../../routing/history';
import AuthActions from '../../store/actions/auth.actions';

class Register extends React.PureComponent<RegisterProps, RegisterState> {
  state = {
    username: '',
    password: '',
    email: '',
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

  handleUpdateEmail = (e): void => {
    this.setState({
      email: e.target.value,
    });
  };

  handleSubmitRegister = (e): void => {
    const { username, password, email } = this.state;
    e.preventDefault();
    this.setState({
      loading: true,
    });

    if (username.length > 0 && email.length > 0 && password.length >= 6) {
      this.authActions.registerUser({
        username,
        password,
        email,
      }, this.registerUserCallback);
    } else {
      ToastStore.error('Please make sure you fill out both username, email and password (min 6 characters)');
      this.setState({
        loading: false,
      });
    }
  };

  registerUserCallback = (errors: Array<string> = []): void => {
    if (errors.length > 0) {
      ToastStore.error('There was a problem trying to register you.');
    } else {
      ToastStore.success('Thanks for registering! Enjoy the game :)');
    }

    this.setState({
      loading: false,
    });
  };

  render() {
    const {
      username, password, loading, email,
    } = this.state;

    return (
      <div className={`animated fadeIn ${css.register}`}>
        <h1>Create an account</h1>
        <Form
          inverted
          onSubmit={this.handleSubmitRegister}
        >
          <Form.Field>
            <label>Email</label>
            <input
              placeholder="Email"
              value={email}
              onChange={this.handleUpdateEmail}
            />
          </Form.Field>
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
              Looking to sign in instead?&nbsp;
              <Link to="/login">Click here</Link>
            </span>
          </Form.Field>
          <Button
            type="submit"
            color="yellow"
            loading={loading}
            disabled={loading}
          >
            Create Account
          </Button>
        </Form>
      </div>
    );
  }
}

export default Register;
