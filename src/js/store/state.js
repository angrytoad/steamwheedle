// @flow

import type { CurrentUser } from './types/user.types';

export type AppState = {
    +test: string,
    +currentUser: CurrentUser,
    +userLoggedIn: boolean,
}
