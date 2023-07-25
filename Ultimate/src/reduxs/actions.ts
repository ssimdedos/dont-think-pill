import type { Action } from 'redux';
import { User } from './AppState';

type LoginAction = Action<'LOG_IN'> & {
  loggedUser: User;
};

type LogoutAction = Action<'LOG_OUT'>;

export type LoginActions = LogoutAction | LoginAction;

export const LoginAction = (loggedUser: User): LoginAction => ({
  type: 'LOG_IN',
  loggedUser,
});

export const LogoutAction = (): LogoutAction => ({
  type: 'LOG_OUT',
});
