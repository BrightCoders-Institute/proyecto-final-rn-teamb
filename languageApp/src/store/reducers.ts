import {combineReducers} from '@reduxjs/toolkit';
import userSlice from './userSlice';
import levelSlice from './levelSlice';

const rootReducer = combineReducers({
  data: userSlice,
  level_data: levelSlice
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
