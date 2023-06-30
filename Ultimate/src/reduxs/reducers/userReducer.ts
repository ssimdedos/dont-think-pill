import { AppState } from "reduxs/AppState";
import type { LoginActions } from "reduxs/actions";

const initialState: AppState = {
  loggedIn: false,
  loggedUser: {email: '', name:'', password:'', gender:'none', age:0, height:0, weight:0}
}

// prettier-ignore
export const userReducer = 
  (state: AppState = initialState, action: LoginActions) => {
    switch (action.type) {
      case 'login': return state;
      case 'logout': return state;
    }
    return state
  }