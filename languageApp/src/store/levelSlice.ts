import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface levelInterface {
  level: string;
  typeOfWord: string;
}

const initialState: levelInterface = {
  level: '',
  typeOfWord: '',
};

const levelSlice = createSlice({
  name: 'level_data',
  initialState,
  reducers: {
    setLevel: (state, action: PayloadAction<string>) => {
      state.level = action.payload;
    },
    setTypeOfWord: (state, action: PayloadAction<string>) => {
      state.typeOfWord = action.payload;
    },
  },
});

export const {setLevel, setTypeOfWord} = levelSlice.actions;

export default levelSlice.reducer;
