import { configureStore } from '@reduxjs/toolkit';
import modeReducer from '../slices/modeSlice';
import chatReducer from '../slices/chatSlice';

const store = configureStore({
  reducer: {
    mode: modeReducer,
    chat: chatReducer,
  },
});

export default store;
