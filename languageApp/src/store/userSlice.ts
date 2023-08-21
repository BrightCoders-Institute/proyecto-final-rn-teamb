import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface DataState {
  authState: string;
  email: string;
  name: string;
}

const initialState: DataState = {
  authState: 'Checking',
  email: '',
  name: '',
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
  },
});

export const {setAuthState, setEmail, setName} = userSlice.actions;

export default userSlice.reducer;
