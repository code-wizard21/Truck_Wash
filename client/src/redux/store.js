import { configureStore, createSlice } from "@reduxjs/toolkit";

const emptyReducer = createSlice({
  name: "empty",
  initialState: null,
  reducers: {},
}).reducer;

export const store = configureStore({
  reducer: {
    emptyState: emptyReducer,
  },
});
