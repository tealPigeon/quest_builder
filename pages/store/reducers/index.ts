import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    width: 100,
    height:100,
    angle:0,
    x:0,
    y:0
  },
  reducers: {
    increment: (state) => {
      state.width += 1;
    },
    decrement: (state) => {
      state.width -= 1;
    },
    incrementByAmount: (state, action) => {
      state.width = action.payload;
    },
    incrementByAmountHeight: (state, action) => {
      state.height = action.payload;
    },
    incrementByAmountAngle: (state, action) => {
      state.angle = action.payload;
    },
    incrementByAmountX: (state, action) => {
      state.x = action.payload;
    },
    incrementByAmountY: (state, action) => {
      state.y = action.payload;
    },
  }
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, incrementByAmountHeight,incrementByAmountAngle, incrementByAmountX, incrementByAmountY } = counterSlice.actions;

export default counterSlice.reducer;
