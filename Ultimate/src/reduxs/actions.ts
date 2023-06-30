import type { Action } from "redux";
import { User } from "./AppState";

type LoginAction = Action<'login'> & {
  loggedUser: User
};

type LogoutAction = Action<'logout'>;

export type LoginActions = LogoutAction | LoginAction;

export const loginAction = (loggedUser: User): LoginAction => ({
  type: 'login',
  loggedUser
});

export const LogoutAction = (): LogoutAction => ({
  type: 'logout'
});