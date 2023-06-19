import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

export interface IAppState {
  appLoading: boolean;
  alert: {
    type: 'notification' | 'success' | 'error';
    title: string;
    message: string;
  } | null;
}

export const initialState: IAppState = {
  appLoading: false,
  alert: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppLoading: (state: IAppState, {payload}: PayloadAction<boolean>) => {
      state.appLoading = payload;
    },
    setAppAlert: (
      state,
      action: PayloadAction<{
        type: 'notification' | 'success' | 'error';
        message: string;
        title: string;
      } | null>,
    ) => {
      state.alert = action.payload;
    },
    clearAlert: state => {
      state.alert = null;
    },
  },
});

export const {setAppLoading, setAppAlert, clearAlert} = appSlice.actions;

export const appSelector = (state: RootState) => state.app;

export default appSlice.reducer;
