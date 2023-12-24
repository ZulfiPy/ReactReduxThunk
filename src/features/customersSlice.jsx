import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const CUSTOMERS_URL = "http://localhost:3500/customers";

const initialState = {
    customers: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded'
    error: null
}

export const fetchCustomers = createAsyncThunk('customers/fetchCustomers', async () => {
    const response = await axios.get(CUSTOMERS_URL);
    return response.data;
})

export const addNewCustomer = createAsyncThunk('customers/addNewCustomer', async (newCustomer) => {
    const response = await axios.post(CUSTOMERS_URL, newCustomer);
    return response.data;
})

export const deleteCustomer = createAsyncThunk('customers/deleteCustomer', async (customerData) => {
    const { id } = customerData;
    try {
        const response = await axios.delete(`${CUSTOMERS_URL}/${id}`);
        if (response?.status === 200) return customerData;
        return `${response?.status}: ${response?.statusText}`;
    } catch (error) {
        return error.message
    }
})

export const customersSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchCustomers.pending, (state, action) => {
            state.status = 'loading';
            })
            .addCase(fetchCustomers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.customers = action.payload
            })
            .addCase(fetchCustomers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                state.customers = [];
            })
            .addCase(addNewCustomer.fulfilled, (state, action) => {
                state.customers.push(action.payload);
            })
            .addCase(deleteCustomer.fulfilled, (state, action) => {
                if (!action.payload?.id) {
                    console.log("Delete coult not complete");
                    console.log(action.payload);
                    return
                }
                const { id } = action.payload;
                state.customers = state.customers.filter(customer => customer.id !== id);
            })
    }
})

export const selectAllCustomers = (state) => state.customers.customers;
export const getCustomersStatus = (state) => state.customers.status;
export const getCustomersError = (state) => state.customers.error;

export default customersSlice.reducer;