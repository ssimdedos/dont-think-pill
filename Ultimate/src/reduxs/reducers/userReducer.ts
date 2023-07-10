import { AppState } from 'reduxs/AppState';
import type { LoginActions } from 'reduxs/actions';

const initialState: AppState = {
  loggedIn: false,
  loggedUser: { name: '' },
};

//  gender: 'none', age: 0, height: 0, weight: 0

// prettier-ignore
export const userReducer = 
  (state: AppState = initialState, action: LoginActions) => {
    switch (action.type) {
      case 'LOG_IN': {
        console.log('로그인 호출');
        return {...state, loggedUser: action.loggedUser, loggedIn: true}};
      case 'LOG_OUT':{
        console.log('로그아웃 호출');
        return initialState};
    }
    return state
  }
