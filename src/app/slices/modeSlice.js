import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    changeMode: (state, action) => {
      state.value = !(action.payload);
      console.log('state', state.value)
      if (state.value == true) {
        document.documentElement.classList.add('dark');
      }
      else {
        document.documentElement.classList.remove('dark');
      }
    },
  },
});

export const { changeMode } = modeSlice.actions;
export default modeSlice.reducer;
