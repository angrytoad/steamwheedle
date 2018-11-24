// @flow
import Cookies from 'js-cookie';

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
