import {combineReducers} from '@reduxjs/toolkit';
import userSlice from './userSlice';

const rootReducer = combineReducers({
  data: userSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
