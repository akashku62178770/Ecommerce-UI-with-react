import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { status } from "../models/types";
// import { car } from "../types";

const initialState: status = {
  success: false,
  error: false,
  loading: false,
  error_message: "",
  success_message: "",
};
const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    setIsLoading(state) {
      state.loading = true;
      state.success = false;
      state.error = false;
    },
    setSuccess(state, action: PayloadAction<string>) {
      state.success = true;
      state.loading = false;
      state.success_message = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = true;
      state.loading = false;
      state.error_message = action.payload;
    },
  },
});

export default statusSlice.reducer;
export const statusActions = statusSlice.actions;
