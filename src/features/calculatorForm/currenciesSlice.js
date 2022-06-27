import { createSlice } from "@reduxjs/toolkit";

const currenciesSlice = createSlice({
    name: "currencies",
    initialState: {
        amount: '',
    },
    reducers: {
        handleAmountChange: (state, action) => {
            state.amount = action.payload;
        },
    },
});

export const {
    handleAmountChange,
} = currenciesSlice.actions

const selectCurrenciesState = state => state.currencies;

export const selectAmount = state => selectCurrenciesState(state).amount;

export default currenciesSlice.reducer;