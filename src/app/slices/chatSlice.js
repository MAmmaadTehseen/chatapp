import { createSlice } from '@reduxjs/toolkit';

const initialState = { value:'#' };

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    changeChat: (state,action) => { state.value =action.payload; },
    // decrement: (state) => { state.value -= 1; },
  },
});

export const { changeChat } = chatSlice.actions;
export default chatSlice.reducer;
