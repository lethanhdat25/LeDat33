import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { regionApi } from "../../api/regions/index";

const initialState = {
  pending: false,
  success: false,
  failed: false,
  message: "",
  data: [],
};

export const getRegions = createAsyncThunk("get list region", async () => {
  const res = await regionApi.getData();
  return res.data;
});

const region = createSlice({
  name: "province",
  initialState,
  extraReducers: {
    [getRegions.pending]: (state) => {
      state.pending = true;
      state.success = false;
      state.failed = false;
    },
    [getRegions.fulfilled]: (state, action) => {
      state.pending = false;
      state.success = true;
      state.data = action.payload;
    },
    [getRegions.rejected]: (state, action) => {
      state.pending = false;
      state.failed = true;
      state.message = action.error.message;
    },
  },
});
export default region.reducer;
