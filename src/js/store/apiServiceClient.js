// @flow
import Cookies from 'js-cookie';
import axios from 'axios';
import history from '../routing/history';
import { ToastStore } from 'react-toasts';

const getAuthCookie = (): string => Cookies.get('auth_token');

export default class {
  static getAuthCookie = () => Cookies.get('auth_token');

  static options() {
    return {
      headers: {
        Authorization: `Bearer ${this.getAuthCookie()}`,
        Accept: 'application/json',
      },
    };
  }
}

axios.interceptors.response.use(null, (error) => {
  if (error.response.status === 401) {
    Cookies.remove('auth_token');
    history.push('/login');
    //ToastStore.error('Please login to continue.');
  }

  if (error.response.status === 422) {
    ToastStore.error('A request was sent without JSON.');
  }
  return Promise.reject(error);
});
