import {combineReducers} from '@reduxjs/toolkit';

import app from './app-reducer';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  app,
});

export default rootReducer;
