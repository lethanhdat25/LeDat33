import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { provincesApi } from "../../api/province/index";

const initialState = {
    pending: false,
    success: false,
    failed: false,
    message: "",
    data: [],
};

export const getProvince = createAsyncThunk("get list provine", async () => {
    const res = await provincesApi.getData();
    return res.data;
});

export const getProvinceById = createAsyncThunk('Get Province By Id', async (params) => {
    const res = await provincesApi.getProvinceById(params);
    return res.data;
});

const province = createSlice({
    name: "province",
    initialState,
    extraReducers: {
        [getProvince.pending]: (state) => {
            state.pending = true;
            state.success = false;
            state.failed = false;
        },
        [getProvince.fulfilled]: (state, action) => {
            state.pending = false;
            state.success = true;
            state.data = action.payload;
        },
        [getProvince.rejected]: (state, action) => {
            state.pending = false;
            state.failed = true;
            state.message = action.error.message;
        },
        [getProvinceById.fulfilled]: (state, action) => {
            state.pending = false;
            state.success = true;
            state.data = action.payload;
        },
        [getProvinceById.rejected]: (state, action) => {
            state.pending = false;
            state.failed = true;
            state.message = action.error.message;
        },
    },
});
export default province.reducer;
