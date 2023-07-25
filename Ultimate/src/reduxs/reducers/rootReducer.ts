import {combineReducers} from '@reduxjs/toolkit';

import app from './app-reducer';
import { userReducer } from './userReducer';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  app,
  userReducer,
});

export default rootReducer;
