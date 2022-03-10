import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {userApi} from '../../api/user';

const initialState = {
    pending: false,
    success: false,
    failed: false,
    message: '',
    data: [],
};


export const editUser = createAsyncThunk('Edit User', async (params) => {
    const res = await userApi.editUser(params);
    return res.data;
});

export const getUserByGmail = createAsyncThunk('Get User By Id', async (params) => {
    const res = await userApi.getUserById(params);
    return res.data;
});



const products = createSlice({
    name: 'user',
    initialState,
});

export default products.reducer;
