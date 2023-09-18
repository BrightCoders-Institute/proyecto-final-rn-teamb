import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface DataState {
  authState: string;
  email: string;
  name: string;
  beginner_progress: Array<number>;
  intermediate_progress: Array<number>;
  advance_progress: Array<number>;
  nouns_progress: Array<number>;
}

const initialState: DataState = {
  authState: 'Checking',
  email: '',
  name: '',
  beginner_progress: [],
  intermediate_progress: [],
  advance_progress: [],
  nouns_progress: [],
};

const userSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<string>) => {
      state.authState = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setBeginner_progress: (state, action: PayloadAction<Array<number>>) => {
      state.beginner_progress = action.payload;
    },
    setIntermediate_progress: (state, action: PayloadAction<Array<number>>) => {
      state.intermediate_progress = action.payload;
    },
    setAdvance_progress: (state, action: PayloadAction<Array<number>>) => {
      state.advance_progress = action.payload;
    },
    setNouns_progress: (state, action: PayloadAction<Array<number>>) => {
      state.advance_progress = action.payload;
    },
  },
});

export const {setAuthState, setEmail, setName, setBeginner_progress, setIntermediate_progress, setAdvance_progress, setNouns_progress} = userSlice.actions;

export default userSlice.reducer;
