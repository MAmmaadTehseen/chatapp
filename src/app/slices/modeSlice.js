import { createSlice } from '@reduxjs/toolkit';

const initialState = { value:true };

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    change: (state) => { state.value =!( state.value); },
    // decrement: (state) => { state.value -= 1; },
  },
});

export const { change } = modeSlice.actions;
export default modeSlice.reducer;
