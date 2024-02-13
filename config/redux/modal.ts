///This keeps track of the modal status

///Libraries --> 
import { createSlice } from "@reduxjs/toolkit";

///Commencing code
///This is for hire modal status
export const hireStatusSlice = createSlice({
  name: "hireStatus",
  initialState: {
    hireStatus: false
  },
  reducers: {
    positive: (state) => {
      state.hireStatus = true;
    },
    negative: (state) => {
        state.hireStatus = false;
    }
  }
});

// Action creators are generated for each case reducer function
export const { positive, negative } = hireStatusSlice.actions;

export default hireStatusSlice.reducer;