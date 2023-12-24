import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const CUSTOMERS_URL = "http://localhost:3500/customers";

const initialState = {
    customers: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded'
    error: null
}

export const fetchCustomers = createAsyncThunk('customers/fetchCustomers', async () => {
    try {
        const response = await axios.get(CUSTOMERS_URL);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
})

export const addNewCustomer = createAsyncThunk('customers/addNewCustomer', async (newCustomer) => {
    try {
        const response = await axios.post(CUSTOMERS_URL, newCustomer);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
})

export const deleteCustomer = createAsyncThunk('customers/deleteCustomer', async (customerData) => {
    const { id } = customerData;
    try {
        const response = await axios.delete(`${CUSTOMERS_URL}/${id}`);
        if (response?.status === 200) return customerData;
        throw new  Error(`${response?.status}: ${response?.statusText}`);
    } catch (error) {
        throw new Error(error.message);
    }
})

export const updateCustomer = createAsyncThunk('customers/updateCustomer', async (customerData) => {
    const { id } = customerData;
    console.log(id)
    try {
        const response = await axios.put(`${CUSTOMERS_URL}/${id}`, customerData);
        if(response?.status === 200) return response.data;
        throw new  Error(`${response?.status}: ${response?.statusText}`);
    } catch (error) {
        throw new Error(error.message);
    }
})

export const customersSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchCustomers.pending, (state) => {
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
            .addCase(addNewCustomer.pending, (state) => {
                state.status = "loading";
            })
            .addCase(addNewCustomer.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.customers.push(action.payload);
            })
            .addCase(addNewCustomer.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(deleteCustomer.pending, (state) => {
                state.status = "loading";
            })
            .addCase(deleteCustomer.fulfilled, (state, action) => {
                if (!action.payload?.id) {
                    console.log("Delete could not complete");
                    console.log(action.payload);
                    return;
                }
                const { id } = action.payload;
                state.status = "succeeded";
                state.customers = state.customers.filter(customer => customer.id !== id);
            })
            .addCase(deleteCustomer.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(updateCustomer.pending, (state) => {
                state.status = "loading";
            })
            .addCase(updateCustomer.fulfilled, (state, action) => {
                if (!action.payload?.id) {
                    console.log("Update could not complete");
                    console.log(action.payload);
                    return;
                }
                const { id } = action.payload;
                const index = state.customers.findIndex(customer => customer.id === id)
                if (index !== -1) {
                    state.status = "succeeded";
                    state.customers[index] = action.payload;
                }
            })
            .addCase(updateCustomer.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})

export const selectAllCustomers = (state) => state.customers.customers;
export const getCustomersStatus = (state) => state.customers.status;
export const getCustomersError = (state) => state.customers.error;

export default customersSlice.reducer;