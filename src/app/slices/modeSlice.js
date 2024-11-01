import { createSlice } from '@reduxjs/toolkit';

const initialState = { value:true };

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    changeMode: (state) => { state.value =!( state.value); },
    // decrement: (state) => { state.value -= 1; },
  },
});

export const { changeMode } = modeSlice.actions;
export default modeSlice.reducer;
