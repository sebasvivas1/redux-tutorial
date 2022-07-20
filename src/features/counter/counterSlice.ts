import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: { value: number }) => {
      state.value++;
    },
    decrement: (state: { value: number }) => {
      state.value--;
    },
    increaseByAmount: (
      state: { value: number },
      action: PayloadAction<number>,
    ) => {
      state.value += action.payload;
    },
    decreaseByAmount: (
      state: { value: number },
      action: PayloadAction<number>,
    ) => {
      state.value -= action.payload;
    },
    reset: (state: { value: number }) => {
      state.value = 0;
    },
  },
});

export const {
  increment,
  decrement,
  increaseByAmount,
  decreaseByAmount,
  reset,
} = counterSlice.actions;
export default counterSlice.reducer;
